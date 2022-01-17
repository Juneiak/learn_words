import React from 'react';
import styles from './main-page.module.css';
import ButtonPrimary from '../../components/buttons/button-primary/button-primary';
import { AddIcon } from '../../components/icons';
import SearchBar from '../../components/search-bar/search-bar';

function MainPage() {



  return (
    <main className={styles.page}>
      <div className={styles.content}>

        <section className={styles.functions}>
          <ButtonPrimary 
            buttonText='add new word'
            clickHandle={() => true}
            buttonIcon={AddIcon}
            buttonWidth='210px'
            buttonHeight='56px'
          />
          <SearchBar />
        </section>

        <section className={styles.lists}>

        </section>

      </div>
      
    </main>
  )
}

export default MainPage;
