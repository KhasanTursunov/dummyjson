import React from 'react'
import './footer.scss'
import logoFull from '../../assets/svg/logo_full.svg'
import footer1 from '../../assets/svg/footer1.svg'
import footer2 from '../../assets/svg/footer2.svg'
import footer3 from '../../assets/svg/footer3.svg'
import footer4 from '../../assets/svg/footer4.svg'
import footer5 from '../../assets/svg/footer5.svg'
import footer6 from '../../assets/svg/footer6.svg'


const Footer = () => {
  return (
    <>
      <div>
        <footer class="footer">
          <div class="container">
            <div class="footer_1">
              <img src={logoFull} alt="" />
              <p>ООО «Стройоптторг»</p>

              <div class="footer1_inside1">
                <p>ИНН: 0901051787</p>
                <p>КПП 090101001</p>
              </div>

              <div class="footer1_inside2">
                <p>Email:</p>
                <a href="mailto">info@stroiopttorg.ru</a>
              </div>

              <div class="footer1_inside3">
                <a href="tel:88004440065">8 800 444 00 65</a>
                <p>Ежедневно, с 8:00 до 18:00</p>
              </div>

              <div class="footer1_inside4">
                <button class="footer1_button" type="button">
                  Заказать звонок
                </button>
              </div>
            </div>

            <div class="footer2">
              <div class="footer2_inside1">
                <div class="footer2_inside1_inside1">
                  <h3>Информация</h3>
                </div>
                <ul>
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
                </ul>
              </div>

              <div class="footer2_inside2">
                <ul>
                  <li>
                    <a href="#">Вопрос-ответ</a>
                  </li>
                  <li>
                    <a href="#">Новости</a>
                  </li>
                  <li>
                    <a href="#">Контакты</a>
                  </li>
                  <li>
                    <a href="#">Вход \ Регистрация</a>
                  </li>
                  <li>
                    <a href="#">Все акции</a>
                  </li>
                </ul>
              </div>

              <div class="footer2_inside3">
                <div class="footer2_inside2_inside1">
                  <h3>Каталог</h3>
                </div>
                <ul>
                  <li>
                    <a href="#">Общестроительные материалы</a>
                  </li>
                  <li>
                    <a href="#">Все для сауны и бани</a>
                  </li>
                  <li>
                    <a href="#">Инструмент</a>
                  </li>
                  <li>
                    <a href="#">Отделочные материалы</a>
                  </li>
                  <li>
                    <a href="#">Товары для дома, сада и огорода</a>
                  </li>
                </ul>
              </div>

              <div class="footer2">
                <div class="footer2_inside4">
                  <ul>
                    <li>
                      <a href="#">Электротовары</a>
                    </li>
                    <li>
                      <a href="#">Сантехника</a>
                    </li>
                    <li>
                      <a href="#">Столярные изделия</a>
                    </li>
                    <li>
                      <a href="#">Спецодежда и средства</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="footer2_inside5">
                <ul>
                  <li>
                    <a href="#">
                      Водо-газоснабжение, <br />
                      отопление, вентиляция
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Метизные, такелажные и <br />
                      скобяные изделия
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="footer3">
              <div class="footer3_inside1">
                <p>
                  Мы принимаем <br />к оплате:
                </p>
              </div>

              <div class="footer3_inside2">
                <a href="#">
                  <img src={footer1} alt="footer_img" />
                </a>
                <a href="#">
                  <img src={footer2} alt="footer_img" />
                </a>
                <a href="#">
                  <img src={footer3} alt="footer_img" />
                </a>
                <a href="#">
                  <img src={footer4} alt="footer_img" />
                </a>
                <a href="#">
                  <img src={footer5} alt="footer_img" />
                </a>
                <a href="#">
                  <img src={footer6} alt="footer_img" />
                </a>
              </div>

              <div class="footer3_inside3">
                <h3>
                  Подпишитесь на рассылку <br />и будьте в курсе!
                </h3>
                <form class="footer_form" action="">
                  <input type="text" placeholder="Ваш email" />
                  <img src="./svg/footer_form.svg" alt="" />
                </form>
              </div>
            </div>

            <div class="footer4">
              <div class="footer4_inside1">
                <a href="#">
                  © 2003-2023 Интернет-магазин ООО «Стройоптторг» р/с
                  40702810360000102415
                </a>
                <a href="#">
                  в Ставропольское отделение №5230 ПАО Сбербанк, БИК 040702615
                </a>
              </div>

              <div class="footer4_inside2">
                <img src="./svg/footer4isnide.svg" alt="" />
              </div>

              <div class="footer4_inside1">
                <a href="#">Политика конфиденциальности</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer