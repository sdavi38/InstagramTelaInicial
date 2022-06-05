
import Head from 'next/head'
import Image from 'next/image'
import img1 from '../src/img/img1.png'
import imgCelular from '../src/img/instagram-celular.png'
import instagram from '../src/img/instagram-logo.png'
import perfil from '../src/img/perfil-instagram.jpg'
import styles from '../styles/Home.module.css'


  export default function Home() {
  return (
    <div >
      <Head>
        <title>Instagram</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      
      <main className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.phone}>
            <Image src={imgCelular} alt="celular"/> 
            <div className={styles.imgBackground}>
            <Image src={img1} alt="img1"/>
            </div>
           
            </div>
          <div className={styles.login}>
            <div className={styles.group}>
              <div className={styles.logo} >
              <Image src={instagram} alt="instagram"/>
              </div>
              
              <div className={styles.perfil}> 
               <Image src={perfil} alt="perfil"/></div>
            

              <button className={styles.buttonLogin}>
               <p>Continue como davidbernardo</p>
             </button>
             <a src="#" className={styles.signUp}>Remover conta</a>
                         
            </div>

            <div className={styles.group}>
              <p className={styles.notAccount}>Não sou davidbernardo?</p>
              <p className={styles.notAccount}>
                <span >Alternar Contas</span> ou 
                <span> Inscreva-se</span>
              </p>
            </div>
            <div className={styles.getApp}>
              <p>Baixe o aplicativo</p>
              <div className={styles.download}>
                <div className={styles.appDownload}/>
                <div className={styles.appDownload}/>
               
              </div>
            </div>
            
          </div>

        </div>
      </main>

        
       
    </div>
  )
}


