import React from 'react'
import './navbar.scss'
import logoFull from '../../assets/svg/logo_full.svg'

const Navbar = () => {
  return (
    <>
      <header class="header">
        <div class="container">
          <nav class="first_header">
           
            <div class="first_navbar_left">
              <input class="checkbox" type="checkbox" id="check" />
              <ul class="links">
                <li>
                  <a href="#">О компании</a>
                </li>
                <li>
                  <a href="#">Оплата</a>
                </li>
                <li>
                  <a href="#">Доставка</a>
                </li>
                <li>
                  <a href="#">Возврат</a>
                </li>
                <li>
                  <a href="#">Отзывы</a>
                </li>
                <li>
                  <a href="#">Вопрос-ответ</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Контакты</a>
                </li>
                <label for="check">
                  <img
                    class="logout"
                    src="./svg/logout-svgrepo-com.svg"
                    alt=""
                  />
                </label>
              </ul>
            </div>

            <div class="first_navbar_right">
              <a href="#">Ежедневно, с 8:00 до 18:00</a>
              <a href="tel:88004440065">8 800 444 00 65</a>
              <button class="navbar_button">Заказать звонок</button>
            </div>
          </nav>

          <div class="second_header">
            <div class="first_wrapper">
              <div class="inside_div_img">
                <a class="img_a" href="./index.html">
                  <img src={logoFull} alt="" />
                </a>
              </div>

              <div class="inside_div">
                <button class="catalog">Каталог</button>
              </div>

              <div class="inside_divform">
                <form class="form2" action="">
                  <input
                    type="text"
                    placeholder="Найти среди 50000 товаров. Например: Дрель Bosch"
                  />
                  <img src="./svg/search_white.svg" alt="" />
                </form>
              </div>
            </div>

            <div class="second_wrapper">
              <div class="inside_divv first_div">
                <img src="./svg/one.svg" alt="" />
                <h3>Все акции</h3>
              </div>

              <div class="inside_divv">
                <img src="./svg/two.svg" alt="" />
                <h3>Войти</h3>
              </div>

              <div class="inside_divv">
                <img src="./svg/three.svg" alt="" />
                <h3>Сравнение</h3>
              </div>

              <div class="inside_divv">
                <img src="./svg/four.svg" alt="" />
                <h3>Избранное</h3>
              </div>

              <div class="inside_divv">
                <img src="./svg/five.svg" alt="" />
                <h3>Корзина</h3>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar