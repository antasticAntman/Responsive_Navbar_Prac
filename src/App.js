import './App.css';

function App() {
  return (
    <header class='primary-header'> 
      <div >
        <img className='Cat-logo' src='https://toppng.com/uploads/preview/free-download-cat-png-vector-icon-cat-transparent-background-cat-icon-transparent-background-11563035549ypnlilorb5.png' alt='logo'/>
      </div>

      <nav>
        <ul id='primary-navigation' class='primary-navigation flex'>
          <li class='active'>
            <a class='ff-sans-cond uppercase text-white letter-spacing-2' href='#'>
              <span aria-hidden='true'>00</span>Home
            </a>
          </li>
          <li>
            <a class='ff-sans-cond uppercase text-white letter-spacing-2' href='#'>
              <span aria-hidden='true'>01</span>Destination
            </a>
          </li>
          <li>
            <a class='ff-sans-cond uppercase text-white letter-spacing-2' href='#'>
              <span aria-hidden='true'>02</span>Crew
            </a>
          </li>
          <li>
            <a class='ff-sans-cond uppercase text-white letter-spacing-2' href='#'>
              <span aria-hidden='true'>03</span>Technology
            </a>
          </li>
        </ul>
      </nav>

    </header>
  );
}

export default App;
