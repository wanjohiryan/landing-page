/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import { useEffect, useRef, useState } from 'react';


const Home: NextPage = () => {
    const imgArr = useRef<any[]>([]);

    const moveImg = (xAmount: number, yAmount: number) => {

        for (let i = 0; i < imgArr.current?.length; i++) {
            const img = imgArr.current[i];

            let movementStrength = 5 + (Math.random() * 15);

            img.style.left = img?.offsetLeft + (xAmount / movementStrength) + "px";

            img.style.top = img?.offsetTop + (yAmount / movementStrength) + "px";
        }
    }


    useEffect(() => {

        let prevX = 0;
        let prevY = 0;

        let moveXAmount = 0;
        let moveYAmount = 0;

        document.addEventListener("mousemove", (e) => {
            moveXAmount = (e.pageX - prevX);
            moveYAmount = (e.pageY - prevY);

            moveImg(moveXAmount, moveYAmount)

            prevX = e.pageX;
            prevY = e.pageY;
        });
    }, [])

    const st = [
        styles.img1,
        styles.img2,
        styles.img3,
        styles.img4,
        styles.img5,
        styles.img6,
        styles.img7
    ]

    return (
        <>
            <div className={styles.text}>
                <p>
                    Ubaid Ullah
                    11 months ago
                    quality work boss ,outstanding.
                    please make more videos like that.</p>
            </div>

            {
                st.map((imgStyle, i) => (
                    <img alt="" key={i}
                        src={`/0${1 + i}.jpg`}
                        ref={el => imgArr.current[i] = el}
                        className={`${styles.img} ${imgStyle}`} />
                ))
            }
        </>
    )
}

export default Home
