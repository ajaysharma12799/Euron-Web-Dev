async function fetchRequestTypes() {
  // Global Vars
  const url = "https://jsonplaceholder.typicode.com/posts";

  // GET Request
  const getResponse = await fetch(url, {
    method: "GET",
  });

  // POST Request
  const postRequest = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
    headers: {
      API_KEY: "your-api-key",
    },
  });

  // PUT/PATCH Request
  const putOrPatchRequest = await fetch(url, {
    method: "POST",
    body: JSON.stringify({
      title: "foo",
      body: "bar",
      userId: 1,
    }),
  });

  // DELETE Request
  const deleteRequest = await fetch(`${url}?id=1`, {
    method: "DELETE",
  });
}
