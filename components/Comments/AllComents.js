import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import CommentBuilder from "./CommentBuilder";

function AllComents() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    // const q = query(CommentRef, orderBy("createdAt", "description"));
    const unsub = onSnapshot(
      collection(db, "Blog"),
      (snapshot) => {
        const commentData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComment(commentData);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);
  return (
    <div>
      {comment.length === 0 ? (
        <p>No Comment Found</p>
      ) : (
        comment.map((c) => <CommentBuilder key={c.id} data={c} />)
      )}
    </div>
  );
}

export default AllComents;
