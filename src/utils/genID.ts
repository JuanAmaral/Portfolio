export default function genId() {
  const time = Math.pow(new Date().getTime(), new Date().getTime() / 3e14)
  return (Math.random() * time * 1e16).toString(36).replace('.', '')
}
