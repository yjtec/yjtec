export default ({children,location})=>{
  const auth = ['admin'];
  const isLogin = auth && auth[0] !== 'guest';
  return <div>{children}</div>
}