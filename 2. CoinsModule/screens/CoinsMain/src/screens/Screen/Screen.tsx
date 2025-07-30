import React from "react";
import { HomeIndicator } from "../../components/HomeIndicator";
import { CertificateCheck1 } from "../../icons/CertificateCheck1";
import { CertificateCheck3 } from "../../icons/CertificateCheck3";
import { ChartSimple1 } from "../../icons/ChartSimple1";
import { ChevronDown1 } from "../../icons/ChevronDown1";
import { ChevronDown5 } from "../../icons/ChevronDown5";
import { CoinVertical1 } from "../../icons/CoinVertical1";
import { EuropeanUnion } from "../../icons/EuropeanUnion";
import { FileShieldAlt1 } from "../../icons/FileShieldAlt1";
import { FilterList1 } from "../../icons/FilterList1";
import { Gold1 } from "../../icons/Gold1";
import { MoneyStack2 } from "../../icons/MoneyStack2";
import { Moon1 } from "../../icons/Moon1";
import { SearchAlt2_1 } from "../../icons/SearchAlt2_1";
import { Star6 } from "../../icons/Star6";
import { Star7 } from "../../icons/Star7";
import { Timer1 } from "../../icons/Timer1";
import { Timer2 } from "../../icons/Timer2";
import { Truck1 } from "../../icons/Truck1";
import "./style.css";

export const Screen = (): JSX.Element => {
  return (
    <div className="screen">
      <div className="div">
        <HomeIndicator
          className="home-indicator-instance"
          rectangleClassName="design-component-instance-node"
        />
        <div className="overlap">
          <div className="component">
            <div className="frame">
              <div className="frame-2">
                <img className="image" alt="Image" src="/img/image.png" />

                <div className="image-2" />
              </div>

              <div className="frame-3">
                <SearchAlt2_1 className="icon-instance-node" />
                <img className="group" alt="Group" src="/img/group-6.png" />
              </div>

              <div className="chart-simple-wrapper">
                <ChartSimple1 className="chart-simple-1" />
              </div>

              <div className="moon-wrapper">
                <Moon1 className="moon-1" />
              </div>
            </div>
          </div>

          <img
            className="status-bar"
            alt="Status bar"
            src="/img/status-bar.svg"
          />
        </div>

        <div className="overlap-wrapper">
          <div className="overlap-group">
            <div className="rectangle-2" />

            <div className="frame-4">
              <div className="frame-5">
                <img className="img" alt="Group" src="/img/group-14.png" />

                <div className="text-wrapper">Главная</div>
              </div>

              <div className="frame-5">
                <Gold1 className="overlap-group-wrapper" />
                <div className="text-wrapper-2">Слитки</div>
              </div>

              <div className="frame-5">
                <FileShieldAlt1 className="file-shield-alt-1" />
                <div className="text-wrapper-3">Ордера</div>
              </div>

              <div className="frame-5">
                <img
                  className="overlap-group-wrapper"
                  alt="Frame"
                  src="/img/frame.svg"
                />

                <div className="text-wrapper-4">Объявления</div>
              </div>

              <div className="frame-5">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-2">
                    <CoinVertical1 className="coin-vertical-1" />
                    <div className="group-2" />
                  </div>
                </div>

                <div className="text-wrapper-5">Мои монеты</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-6">
          <div className="frame-7">
            <div className="text-wrapper-6">Золотые монеты</div>

            <div className="text-wrapper-6">|</div>

            <div className="text-wrapper-7">Американский орел</div>
          </div>

          <div className="frame-8">
            <div className="frame-9">
              <div className="image-wrapper">
                <img
                  className="image-3"
                  alt="Image"
                  src="/img/image-19-2.png"
                />
              </div>

              <div className="frame-10">
                <div className="text-wrapper-8">смотреть все</div>

                <ChevronDown1 className="icon-instance-node-2" />
              </div>
            </div>

            <div className="frame-11">
              <div className="text-wrapper-9">
                Золотая монета “Американский орел”
              </div>

              <div className="frame-12">
                <img className="star" alt="Star" src="/img/star-1-2.svg" />

                <img className="star" alt="Star" src="/img/star-2-2.svg" />

                <img className="star" alt="Star" src="/img/star-3-2.svg" />

                <img className="star" alt="Star" src="/img/star-4-2.svg" />

                <img className="star" alt="Star" src="/img/star-5.svg" />

                <div className="element-wrapper">
                  <p className="element">
                    <span className="span">4,87 </span>

                    <span className="text-wrapper-10">/ 5 (13)</span>
                  </p>
                </div>
              </div>

              <p className="p">
                Классическая золотая монета American Eagle чеканится Монетным
                двором США с 1986 года. Gold Eagle также имеет пробу...
              </p>

              <div className="text-wrapper-11">читать далее</div>
            </div>
          </div>

          <div className="frame-13">
            <div className="frame-14">
              <div className="text-wrapper-12">Покупка</div>

              <div className="text-wrapper-13">Продажа</div>

              <div className="frame-wrapper">
                <div className="frame-15">
                  <EuropeanUnion className="icon-instance-node-2" />
                  <div className="text-wrapper-14">EUR</div>

                  <ChevronDown5
                    className="icon-instance-node-2"
                    color="url(#paint0_linear_9881_3793)"
                  />
                </div>
              </div>
            </div>

            <div className="image-4" />

            <div className="frame-16">
              <div className="frame-17">
                <div className="text-wrapper-15">Вес</div>

                <ChevronDown5
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2475)"
                />
              </div>

              <div className="frame-17">
                <div className="text-wrapper-15">Сумма</div>

                <ChevronDown5
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2478)"
                />
              </div>

              <div className="frame-17">
                <div className="text-wrapper-15">Оплата</div>

                <ChevronDown5
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2481)"
                />
              </div>

              <div className="frame-17">
                <div className="text-wrapper-15">Доставка</div>

                <ChevronDown5
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9772_1031)"
                />
              </div>

              <FilterList1 className="icon-instance-node" />
            </div>
          </div>

          <div className="frame-18">
            <div className="frame-19">
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="ellipse" />

                    <div className="text-wrapper-16">GoldenMan</div>

                    <img
                      className="gold-2"
                      alt="Gold"
                      src="/img/gold-2-2x.png"
                    />
                  </div>
                </div>

                <div className="rectangle-3" />

                <div className="frame-23">
                  <div className="text-wrapper-17">Сделок:</div>

                  <div className="text-wrapper-6">1588 / 84%</div>
                </div>
              </div>

              <div className="frame-12">
                <CertificateCheck1 className="icon-instance-node-3" />
                <p className="text-wrapper-18">
                  Certified JetGold Partner + Chief Numismatist
                </p>

                <Timer1 className="icon-instance-node-3" />
                <div className="text-wrapper-19">30 мин</div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-24">
              <div className="text-wrapper-20">€6,526.36</div>

              <div className="text-wrapper-21">+0.90%</div>

              <div className="frame-25">
                <div className="text-wrapper-22">Грамм:</div>

                <div className="text-wrapper-6">€96.36</div>
              </div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">Объём:</div>

              <div className="text-wrapper-6">9653.36535 USDT</div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">На месте:</div>

              <div className="text-wrapper-6">1-10 шт</div>
            </div>

            <div className="div-2" />

            <div className="frame-13">
              <div className="frame-12">
                <MoneyStack2
                  className="icon-instance-node-3"
                  color="url(#paint0_linear_9750_2519)"
                />
                <div className="text-wrapper-18">Оплата</div>
              </div>

              <div className="frame-26">
                <div className="frame-27">
                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">SEPA Instant</div>
                  </div>

                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">Банковская карта</div>
                  </div>
                </div>

                <div className="frame-28">
                  <div className="ellipse-2" />

                  <div className="text-wrapper-24">Банковский перевод SEPA</div>
                </div>
              </div>

              <div className="div-2" />

              <div className="frame-12">
                <Truck1 className="icon-instance-node-3" />
                <div className="text-wrapper-18">Доставка</div>
              </div>

              <div className="frame-29">
                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">На месте</div>
                </div>

                <div className="frame-30">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Самовывоз</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Курьер</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Почта</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Международная</div>
                </div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-31">
              <div className="frame-32">
                <Timer2
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2555)"
                />
                <div className="element-2">11.12.2025&nbsp;&nbsp;15:35</div>
              </div>

              <Star6 className="icon-instance-node" />
              <div className="frame-33">
                <div className="text-wrapper-25">Купить</div>
              </div>
            </div>
          </div>

          <div className="frame-18">
            <div className="frame-19">
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="ellipse" />

                    <div className="text-wrapper-16">GoldenMan</div>

                    <img className="gold-2" alt="Gold" src="/img/gold-3.png" />
                  </div>
                </div>

                <div className="rectangle-3" />

                <div className="frame-23">
                  <div className="text-wrapper-17">Сделок:</div>

                  <div className="text-wrapper-6">1588 / 84%</div>
                </div>
              </div>

              <div className="frame-12">
                <CertificateCheck3
                  className="icon-instance-node-3"
                  color="#00C3B6"
                />
                <div className="text-wrapper-18">Certified JetGold Partner</div>

                <Timer1 className="icon-instance-node-3" />
                <div className="text-wrapper-19">30 мин</div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-24">
              <div className="text-wrapper-20">€6,526.36</div>

              <div className="text-wrapper-21">+0.90%</div>

              <div className="frame-25">
                <div className="text-wrapper-22">Грамм:</div>

                <div className="text-wrapper-6">€96.36</div>
              </div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">Объём:</div>

              <div className="text-wrapper-6">9653.36535 USDT</div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">На месте:</div>

              <div className="text-wrapper-6">1-10 шт</div>
            </div>

            <div className="div-2" />

            <div className="frame-13">
              <div className="frame-12">
                <MoneyStack2
                  className="icon-instance-node-3"
                  color="url(#paint0_linear_9750_2593)"
                />
                <div className="text-wrapper-18">Оплата</div>
              </div>

              <div className="frame-26">
                <div className="frame-27">
                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">SEPA Instant</div>
                  </div>

                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">Банковская карта</div>
                  </div>
                </div>

                <div className="frame-28">
                  <div className="ellipse-2" />

                  <div className="text-wrapper-24">Банковский перевод SEPA</div>
                </div>
              </div>

              <div className="div-2" />

              <div className="frame-12">
                <Truck1 className="icon-instance-node-3" />
                <div className="text-wrapper-18">Доставка</div>
              </div>

              <div className="frame-29">
                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">На месте</div>
                </div>

                <div className="frame-30">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Самовывоз</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Курьер</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Почта</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Международная</div>
                </div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-31">
              <div className="frame-32">
                <Timer2
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2629)"
                />
                <div className="element-2">11.12.2025&nbsp;&nbsp;15:35</div>
              </div>

              <Star7 className="icon-instance-node" />
              <div className="frame-33">
                <div className="text-wrapper-25">Купить</div>
              </div>
            </div>
          </div>

          <div className="frame-18">
            <div className="frame-19">
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="ellipse-4" />

                    <div className="text-wrapper-16">GoldenMan</div>

                    <img className="gold-2" alt="Gold" src="/img/gold-4.png" />
                  </div>
                </div>

                <div className="rectangle-3" />

                <div className="frame-23">
                  <div className="text-wrapper-17">Сделок:</div>

                  <div className="text-wrapper-6">1588 / 84%</div>
                </div>
              </div>

              <div className="frame-12">
                <CertificateCheck3
                  className="icon-instance-node-3"
                  color="#85EA88"
                />
                <div className="text-wrapper-18">Verified Expert</div>

                <Timer1 className="icon-instance-node-3" />
                <div className="text-wrapper-19">30 мин</div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-24">
              <div className="text-wrapper-20">€6,526.36</div>

              <div className="text-wrapper-21">+0.90%</div>

              <div className="frame-25">
                <div className="text-wrapper-22">Грамм:</div>

                <div className="text-wrapper-6">€96.36</div>
              </div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">Объём:</div>

              <div className="text-wrapper-6">9653.36535 USDT</div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">На месте:</div>

              <div className="text-wrapper-6">1-10 шт</div>
            </div>

            <div className="div-2" />

            <div className="frame-13">
              <div className="frame-12">
                <MoneyStack2
                  className="icon-instance-node-3"
                  color="url(#paint0_linear_9750_2667)"
                />
                <div className="text-wrapper-18">Оплата</div>
              </div>

              <div className="frame-26">
                <div className="frame-27">
                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">SEPA Instant</div>
                  </div>

                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">Банковская карта</div>
                  </div>
                </div>

                <div className="frame-28">
                  <div className="ellipse-2" />

                  <div className="text-wrapper-24">Банковский перевод SEPA</div>
                </div>
              </div>

              <div className="div-2" />

              <div className="frame-12">
                <Truck1 className="icon-instance-node-3" />
                <div className="text-wrapper-18">Доставка</div>
              </div>

              <div className="frame-29">
                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">На месте</div>
                </div>

                <div className="frame-30">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Самовывоз</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Курьер</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Почта</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Международная</div>
                </div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-31">
              <div className="frame-32">
                <Timer2
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2703)"
                />
                <div className="element-2">11.12.2025&nbsp;&nbsp;15:35</div>
              </div>

              <Star6 className="icon-instance-node" />
              <div className="frame-33">
                <div className="text-wrapper-25">Купить</div>
              </div>
            </div>
          </div>

          <div className="frame-18">
            <div className="frame-19">
              <div className="frame-20">
                <div className="frame-21">
                  <div className="frame-22">
                    <div className="ellipse-4" />

                    <div className="text-wrapper-16">GoldenMan</div>

                    <img
                      className="icon-instance-node"
                      alt="Gold"
                      src="/img/gold-5.png"
                    />
                  </div>
                </div>

                <div className="rectangle-3" />

                <div className="frame-23">
                  <div className="text-wrapper-17">Сделок:</div>

                  <div className="text-wrapper-6">1588 / 84%</div>
                </div>
              </div>

              <div className="frame-12">
                <CertificateCheck3
                  className="icon-instance-node-3"
                  color="#85EA88"
                />
                <div className="text-wrapper-18">Verified Expert</div>

                <Timer1 className="icon-instance-node-3" />
                <div className="text-wrapper-19">30 мин</div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-24">
              <div className="text-wrapper-20">€6,526.36</div>

              <div className="text-wrapper-26">-0.90%</div>

              <div className="frame-25">
                <div className="text-wrapper-22">Грамм:</div>

                <div className="text-wrapper-6">€96.36</div>
              </div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">Объём:</div>

              <div className="text-wrapper-6">9653.36535 USDT</div>
            </div>

            <div className="frame-22">
              <div className="text-wrapper-23">На месте:</div>

              <div className="text-wrapper-6">1-10 шт</div>
            </div>

            <div className="div-2" />

            <div className="frame-13">
              <div className="frame-12">
                <MoneyStack2
                  className="icon-instance-node-3"
                  color="url(#paint0_linear_9750_2741)"
                />
                <div className="text-wrapper-18">Оплата</div>
              </div>

              <div className="frame-26">
                <div className="frame-27">
                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">SEPA Instant</div>
                  </div>

                  <div className="frame-25">
                    <div className="ellipse-2" />

                    <div className="text-wrapper-24">Банковская карта</div>
                  </div>
                </div>

                <div className="frame-28">
                  <div className="ellipse-2" />

                  <div className="text-wrapper-24">Банковский перевод SEPA</div>
                </div>
              </div>

              <div className="div-2" />

              <div className="frame-12">
                <Truck1 className="icon-instance-node-3" />
                <div className="text-wrapper-18">Доставка</div>
              </div>

              <div className="frame-29">
                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">На месте</div>
                </div>

                <div className="frame-30">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Самовывоз</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Курьер</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Почта</div>
                </div>

                <div className="frame-25">
                  <div className="ellipse-3" />

                  <div className="text-wrapper-24">Международная</div>
                </div>
              </div>
            </div>

            <div className="div-2" />

            <div className="frame-31">
              <div className="frame-32">
                <Timer2
                  className="icon-instance-node-2"
                  color="url(#paint0_linear_9750_2777)"
                />
                <div className="element-2">11.12.2025&nbsp;&nbsp;15:35</div>
              </div>

              <Star6 className="icon-instance-node" />
              <div className="frame-33">
                <div className="text-wrapper-25">Купить</div>
              </div>
            </div>
          </div>
        </div>

        <div className="view">
          <div className="frame-34">
            <div className="text-wrapper-27">Золото:</div>

            <div className="text-wrapper-28">6,526.36 евро</div>

            <div className="text-wrapper-29">+0.90%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
