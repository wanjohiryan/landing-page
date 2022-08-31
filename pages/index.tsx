import type { NextPage } from 'next'
import Head from 'next/head'
import { gsap } from 'gsap';
//import styles from '../styles/Home.module.css'
import styles from '../styles/Home.module.scss'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
// import useIsomorphicLayoutEffect from '../components/useIsomorphicLayoutEffect';
// import NonSSRWrapper from '../components/NonSSRWrapper';


function useArrayRef() {
  const refs: any = []
  return [refs, (el: any) => el && refs.push(el)]
}

const Home: NextPage = () => {
  const app = useRef(null);
  const tl = gsap.timeline();
  const [render, setRender] = useState(false)
  const [elements, elmt] = useRef(useArrayRef()).current;

  const [imgs, imgRef] = useRef(useArrayRef()).current;

  const logo = useRef<HTMLDivElement | null>(null);

  useEffect(()=>{
    setRender(true)
  },[])

  useEffect(() => {
    // prevent app fromflassing initially

    tl.to(app,{css: {visibility: 'visible'}, duration:0});

    if (render) {
        tl.fromTo(logo.current, {
          y: 200,
          opacity: 0,
          duration: 1,
        }, {
          y: 0,
          opacity: 1,
          duration: 1,
        })
      

      tl.fromTo(elements, {
        y: 500,
        stagger: .2,
        opacity: 0,
        duration: 1
      }, {
        y: 0,
        stagger: .2,
        opacity: 1,
      })

      tl.fromTo(imgs, {
        y: 500,
        stagger: .2,
        scale: 1.4,
        opacity: 0,
        duration: 1
      }, {
        y: 0,
        stagger: .2,
        scale: 1,
        opacity: 1,
      })
      
    }

  }, [render]);

  return (
    <div ref={app} className={styles.container}>
      <Head>
        <title>Qwantify Photos</title>
        <meta name="description" content="backup photos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.menu}>
        <div ref={logo} className={styles.logo}>
          <img src="/lb.png" alt="" />
        </div>

        <div className={styles.wrapper}>
          <div className={styles.lwrap}>
            <div ref={elmt} className={styles.elmt}>
              <h1 ref={elmt}>Backup your<span>Photos</span> from your computer</h1>
              <p ref={elmt}>
                Drop your idea and tell the world who you are and what you can do with 3D graphics
              </p>
              <div ref={elmt} className={styles.button}>
                <a href="#">
                  Install
                </a>
                <div className={styles.vdbtn}>
                  <img src="/call.svg" alt="" />
                  <p>Contact Support</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rwrap}>
            <div className={styles.img1}>
              <img ref={imgRef} src="/01.jpg" alt="" />
              <img ref={imgRef} src="/02.jpg" alt="" />
              <img ref={imgRef} src="/03.jpg" alt="" />
            
            </div>
            <div className={styles.img2}>
              <img ref={imgRef} src="/04.jpg" alt="" />
              <img ref={imgRef} src="/05.jpg" alt="" />
              <img ref={imgRef} src="/06.jpg" alt="" />
              <img ref={imgRef} src="/01.jpg" alt="" />
              <img ref={imgRef} src="/02.jpg" alt="" />
              <img ref={imgRef} src="/03.jpg" alt="" />
            </div>
            <div className={styles.img1}>
              <img ref={imgRef} src="/07.jpg" alt="" />
              <img ref={imgRef} src="/08.jpg" alt="" />
              <img ref={imgRef} src="/09.jpg" alt="" />
            </div>
          </div>
        </div>

      </div>
    </div>
  )
};

export default Home
