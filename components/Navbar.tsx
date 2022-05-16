
type Props = {
  username: string
  loading: boolean
  signout: () => void
}

const Navbar = ({username, loading, signout}:Props) => {
  return (
    <div className='shadow-sm h-12 flex items-center justify-between px-5'>
      <h1 className='uppercase font-semibold'>{loading ? 'loading' :`Welcome, ${username}`}</h1>
      <button className='px-2 py-1 border-2 border-black rounded-xl' onClick={signout} disabled={loading}>{loading ? 'loading' : 'Logout'}</button>
    </div>
  )
}

export default Navbar