import React from "react";
import { ChartSimpleWrapper } from "../../components/ChartSimpleWrapper";
import { CoinVerticalWrapper } from "../../components/CoinVerticalWrapper";
import { GoldWrapper } from "../../components/GoldWrapper";
import { HomeIndicator } from "../../components/HomeIndicator";
import { SearchAlt2_1 } from "../../icons/SearchAlt2_1";
import "./style.css";

export const ScreenScreen = (): JSX.Element => {
  return (
    <div className="screen-screen">
      <div className="screen-2">
        <div className="frame-35">
          <div className="frame-36">
            <div className="frame-37">
              <div className="text-wrapper-30">GLD</div>

              <div className="gold-wrapper">
                <img className="gold-3" alt="Gold" src="/img/gold-2.png" />
              </div>
            </div>

            <div className="frame-38">
              <div className="text-wrapper-30">60 000.12</div>

              <div className="text-wrapper-31">+0.15</div>
            </div>
          </div>

          <img className="vector" alt="Vector" src="/img/vector-5.svg" />
        </div>

        <div className="frame-39">
          <div className="frame-36">
            <div className="frame-40">
              <div className="frame-41">
                <div className="text-wrapper-30">ETH</div>

                <img
                  className="img-2"
                  alt="Cryptocurrency"
                  src="/img/cryptocurrency.svg"
                />
              </div>
            </div>

            <div className="frame-38">
              <div className="text-wrapper-30">81,2</div>

              <div className="text-wrapper-32">-1,2</div>
            </div>
          </div>

          <img className="vector-2" alt="Vector" src="/img/vector-5-1.svg" />
        </div>

        <div className="frame-42">
          <div className="text-wrapper-33">Новые правила платформы</div>

          <div className="text-wrapper-34">12.12.2025</div>

          <textarea
            className="RUB-EUR"
            placeholder="Карточка счетов для управления балансами&lt;br/&gt;и очень важно что бы была валюта или слитки или монеты в виде флажка. так как люди будут плохо ориентироваться если только надпись RUB EUR&lt;br/&gt;"
          ></textarea>
        </div>

        <div className="frame-43">
          <div className="text-wrapper-33">Новые правила платформы</div>

          <div className="text-wrapper-34">12.12.2025</div>

          <textarea
            className="RUB-EUR"
            placeholder="Карточка счетов для управления балансами&lt;br/&gt;и очень важно что бы была валюта или слитки или монеты в виде флажка. так как люди будут плохо ориентироваться если только надпись RUB EUR&lt;br/&gt;"
          ></textarea>
        </div>

        <HomeIndicator
          className="home-indicator-2"
          rectangleClassName="home-indicator-3"
        />
        <div className="overlap-2">
          <div className="component-2">
            <div className="frame-44">
              <div className="frame-45">
                <img className="image-5" alt="Image" src="/img/image.png" />

                <div className="image-6" />
              </div>

              <div className="frame-46">
                <SearchAlt2_1 className="img-2" />
                <img className="group-3" alt="Group" src="/img/group-6.png" />
              </div>

              <div className="group-4">
                <ChartSimpleWrapper />
              </div>

              <img className="element-3" alt="Element" src="/img/1.png" />
            </div>
          </div>

          <img
            className="status-bar-2"
            alt="Status bar"
            src="/img/status-bar-3.svg"
          />
        </div>

        <div className="component-3">
          <div className="overlap-group-3">
            <div className="rectangle-4" />

            <div className="frame-47">
              <div className="frame-48">
                <img
                  className="group-5"
                  alt="Group"
                  src="/img/group-14-2x.png"
                />

                <div className="text-wrapper-35">Главная</div>
              </div>

              <div className="frame-48">
                <img className="loop" alt="Loop" src="/img/loop.svg" />

                <div className="text-wrapper-36">Платежи</div>
              </div>

              <div className="frame-48">
                <CoinVerticalWrapper />
                <div className="text-wrapper-37">Монеты</div>
              </div>

              <div className="frame-48">
                <GoldWrapper />
                <div className="text-wrapper-38">Слитки</div>
              </div>

              <div className="frame-48">
                <img className="bank" alt="Bank" src="/img/bank-2.svg" />

                <div className="text-wrapper-39">Банк</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-49">
          <div className="frame-50">
            <div className="group-6">
              <div className="credit-card-arrow-wrapper">
                <img
                  className="credit-card-arrow"
                  alt="Credit card arrow"
                  src="/img/credit-card-arrow-right-alt-1.svg"
                />
              </div>
            </div>

            <div className="text-wrapper-40">Пополнить</div>
          </div>

          <div className="frame-51">
            <div className="group-7">
              <div className="overlap-group-4">
                <img
                  className="ellipse-5"
                  alt="Ellipse"
                  src="/img/ellipse-4-1.svg"
                />

                <img
                  className="img-3"
                  alt="Credit card alt"
                  src="/img/credit-card-alt-1-1.svg"
                />
              </div>
            </div>

            <div className="text-wrapper-40">Реквизиты</div>
          </div>

          <div className="frame-50">
            <div className="group-7">
              <div className="overlap-group-4">
                <img
                  className="ellipse-6"
                  alt="Ellipse"
                  src="/img/ellipse-4-2.svg"
                />

                <div className="layer" />
              </div>
            </div>

            <div className="text-wrapper-41">Купить золото</div>
          </div>

          <div className="frame-51">
            <div className="dots-horizontal-wrapper">
              <img
                className="img-3"
                alt="Dots horizontal"
                src="/img/dots-horizontal-1.svg"
              />
            </div>

            <div className="text-wrapper-40">Ещё</div>
          </div>
        </div>

        <div className="frame-52">
          <div className="frame-53">
            <div className="text-wrapper-42">Личный баланс</div>

            <img className="eye" alt="Eye" src="/img/eye-1.svg" />
          </div>

          <div className="frame-54">
            <div className="text-wrapper-43">1 156 123 ₽</div>

            <div className="group-4">
              <img
                className="chart-line-up"
                alt="Chart line up"
                src="/img/chart-line-up-1.svg"
              />
            </div>
          </div>
        </div>

        <div className="frame-55">
          <div className="frame-56">
            <div className="frame-41">
              <div className="text-wrapper-30">EUR</div>

              <img
                className="img-2"
                alt="European union"
                src="/img/european-union-1.svg"
              />
            </div>

            <div className="frame-57">
              <img className="img-4" alt="Bank" src="/img/bank-1.svg" />

              <div className="text-wrapper-44">..42849</div>
            </div>
          </div>

          <div className="text-wrapper-45">1 860 000.62</div>
        </div>

        <div className="frame-58">
          <div className="frame-59">
            <img className="image-7" alt="Image" src="/img/image-23.png" />

            <div className="frame-56">
              <div className="frame-41">
                <div className="text-wrapper-42">Виртуальная</div>
              </div>

              <div className="frame-57">
                <img
                  className="img-4"
                  alt="Credit card"
                  src="/img/credit-card-1.svg"
                />

                <div className="text-wrapper-44">..1849</div>
              </div>
            </div>
          </div>

          <div className="frame-59">
            <img className="image-7" alt="Image" src="/img/image-23-1.png" />

            <div className="frame-56">
              <div className="frame-41">
                <div className="text-wrapper-42">Disposable</div>
              </div>

              <div className="frame-57">
                <img
                  className="img-4"
                  alt="Credit card"
                  src="/img/credit-card-2.svg"
                />

                <div className="text-wrapper-44">..1849</div>
              </div>
            </div>
          </div>

          <div className="frame-59">
            <img className="image-8" alt="Image" src="/img/image-19.png" />

            <div className="frame-56">
              <div className="frame-41">
                <div className="text-wrapper-42">Монета</div>
              </div>

              <div className="frame-57">
                <img
                  className="img-4"
                  alt="Credit card"
                  src="/img/credit-card-3.svg"
                />

                <div className="text-wrapper-44">..1849</div>
              </div>
            </div>
          </div>

          <div className="frame-60">
            <img className="image-9" alt="Image" src="/img/image-21.png" />

            <div className="frame-56">
              <div className="frame-41">
                <div className="text-wrapper-42">Слиток</div>
              </div>

              <div className="frame-57">
                <img
                  className="credit-card"
                  alt="Credit card"
                  src="/img/credit-card-4.png"
                />

                <div className="text-wrapper-44">..1849</div>
              </div>
            </div>
          </div>

          <div className="frame-60">
            <img
              className="credit-card-plus"
              alt="Credit card plus"
              src="/img/credit-card-4.png"
            />

            <div className="frame-56">
              <div className="frame-41">
                <div className="text-wrapper-42">
                  Заказать
                  <br />
                  карту
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-61">
          <div className="frame-56">
            <div className="frame-41">
              <div className="text-wrapper-30">USD</div>

              <img
                className="img-2"
                alt="United states"
                src="/img/united-states-1.svg"
              />
            </div>

            <div className="frame-57">
              <img className="img-4" alt="Bank" src="/img/bank-3.svg" />

              <div className="text-wrapper-44">..42849</div>
            </div>
          </div>

          <div className="text-wrapper-45">60 000.12</div>
        </div>

        <div className="frame-62">
          <div className="frame-56">
            <div className="frame-41">
              <div className="text-wrapper-30">GLD</div>

              <div className="gold-wrapper">
                <img className="gold-3" alt="Gold" src="/img/gold-2.png" />
              </div>
            </div>

            <div className="frame-57">
              <img className="img-4" alt="Bank" src="/img/bank-4.svg" />

              <div className="text-wrapper-44">..42849</div>
            </div>
          </div>

          <div className="text-wrapper-46">140.00</div>

          <img
            className="img-2"
            alt="Credit card plus"
            src="/img/credit-card-plus-2.svg"
          />
        </div>

        <div className="frame-63">
          <div className="frame-56">
            <div className="frame-41">
              <div className="text-wrapper-30">EUR</div>

              <img
                className="img-2"
                alt="European union"
                src="/img/european-union-2.svg"
              />
            </div>

            <div className="frame-57">
              <img className="img-4" alt="Bank" src="/img/bank-5.svg" />

              <div className="text-wrapper-44">..42849</div>
            </div>
          </div>

          <div className="text-wrapper-46">60 000.12</div>

          <img
            className="img-2"
            alt="Credit card minus"
            src="/img/credit-card-minus-1.svg"
          />
        </div>

        <div className="frame-64">
          <div className="text-wrapper-47">Операции</div>

          <div className="text-wrapper-48">Смотреть все</div>
        </div>

        <div className="frame-65">
          <div className="text-wrapper-47">Обзор рынка</div>

          <div className="text-wrapper-48">Смотреть все</div>
        </div>

        <div className="frame-66">
          <div className="text-wrapper-47">Карты и слитки</div>

          <div className="text-wrapper-48">Смотреть все</div>
        </div>

        <div className="frame-67">
          <div className="text-wrapper-47">Новости</div>

          <div className="text-wrapper-48">Смотреть все</div>
        </div>

        <div className="frame-68">
          <div className="text-wrapper-49">Добавить виджет JetGold</div>

          <img className="img-2" alt="Grid plus" src="/img/grid-plus-1.svg" />
        </div>
      </div>
    </div>
  );
};
