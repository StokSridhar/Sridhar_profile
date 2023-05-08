import '@/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.css';
import Script from 'next/script'; 
export default function App({ Component, pageProps }) {
  return (
    <>
     
      <Component {...pageProps} />
      <Script>console.log("%cHey👋👨🏼‍💻 Thanks for Visiting My Profile", "color:red; font-size:30px");</Script>
     <Script>console.log("Please Follow me on Linked in", 'https://in.linkedin.com/in/sridhar-s-6b9bb898');</Script>
     <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"/>
    </>
  )

  
}
