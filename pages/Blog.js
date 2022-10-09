import React, { useState, useEffect } from "react";
import AllComents from "../components/Comments/AllComents";
import Layout1 from "../components/Layout/Layout1";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../firebaseConfig";
import { toast } from "react-toastify";
const InitiaState = {
  createdAt: Timestamp.now().toDate(),
  description: "",
  imageUrl: "",
  name: "",
};
function Blog() {
  const [formData, setFormData] = useState(() => {
    InitiaState;
  });
  const [file, setFile] = useState(null);
  const [Progess, setProgess] = useState(0);
  useEffect(() => {
    const upLoadfile = () => {
      const storageRef = ref(
        storage,
        `images/${Date.now()}${file?.imageUrl.name}`
      );
      const uploadImageUrl = uploadBytesResumable(storageRef, file?.imageUrl);
      uploadImageUrl.on(
        "state_changed",
        (snapshot) => {
          const progressPercent = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgess(progressPercent);
        },
        (err) => {
          console.log(err);
        },
        () => {
          getDownloadURL(uploadImageUrl.snapshot.ref).then((url) => {
            setFormData((prev) => ({ ...prev, imageUrl: url }))
              .then(() => {
                toast("image added successfully", { type: "success" });
                setProgess(0);
              })
              .catch((err) => {
                toast("Error adding image. Try Again", { type: "error" });
              });
          });
        }
      );
    };
    /**check for file in the state before calling the upload function */
    file && upLoadfile();
  }, [file]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function handleImageChange(e) {
    setFile({ imageUrl: e.target.files[0] });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!formData.imageUrl || !formData.description || !formData.name) {
      alert("Please upload your picture and fill all the fields");
      return;
    }

    const commentRef = collection(db, "Blog");

    async function writeDb() {
      try {
        await addDoc(commentRef, formData);
        console.log(`This value is updated, congrats`);
      } catch (error) {
        console.log(`This error is stil there${error}`);
      }
    }
    writeDb();
    setFormData(InitiaState);
    setFile(null);
    setProgess(0);
  }

  return (
    <Layout1>
      <section>
        <div>
          <AllComents />
        </div>
        <div>
          <h1>WRITE A COMMENT</h1>
          <form>
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type="file"
              name="imageUrl"
              placeholder="Import your Image"
              accept="image/*"
              onChange={handleImageChange}
            />
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type="text"
              name="name"
              placeholder="Enter Name"
              value={formData?.name}
              onChange={handleChange}
            />
            <input
              className="mt-[2px] block border-solid border border-[red]"
              type=""
              placeholder="Your Comment"
              name="description"
              onChange={handleChange}
              value={formData?.description}
            />
            <button onClick={handleSubmit}>Submit</button>
          </form>
          <span>{Progess === 0 ? 0 : Progess}</span>
        </div>
      </section>
    </Layout1>
  );
}

export default Blog;

// export async function getStaticProps(context) {
//   console.log(process.cwd());
//   return {
//     props: {},
//   };
// }
