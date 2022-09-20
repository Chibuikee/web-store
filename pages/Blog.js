function Blog({ users }) {
  console.log(users);
  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <h1>{user.email}</h1>
        </div>
      ))}
      <h1>Hello world</h1>
    </div>
  );
}

export default Blog;
export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return { props: { users: data } };
}
