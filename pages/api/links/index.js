export default function handler(req, res) {
  if (res.status === 200) {
    const user = res.data;
    return user
  }
}