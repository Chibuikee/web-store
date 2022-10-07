import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import CommentBuilder from "./CommentBuilder";

function AllComents() {
  const [comment, setComment] = useState([]);
  useEffect(() => {
    const CommentRef = collection(db, "Blog");
    const q = query(CommentRef, orderBy("createdAt", "description"));
    onSnapshot(q, (snapshot) => {
      const commentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComment(commentData);
    });
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
