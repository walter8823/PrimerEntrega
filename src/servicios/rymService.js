export async function getAllCharacters(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch((error) => reject(error));
    });
  }