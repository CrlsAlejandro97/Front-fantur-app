import "../styles/index.css";
//import Layout from '../pages/component/Layout'

export default function MyApp({ Component, pageProps }) {
  return (
    <div className='px-8 mt-10'>
        <Component {...pageProps} />
    </div>
  )
}
