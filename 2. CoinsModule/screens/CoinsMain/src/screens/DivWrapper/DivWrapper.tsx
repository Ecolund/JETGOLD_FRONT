import React from "react";
import { ChartSimpleWrapper } from "../../components/ChartSimpleWrapper";
import { ChevronDownWrapper } from "../../components/ChevronDownWrapper";
import { CoinVerticalWrapper } from "../../components/CoinVerticalWrapper";
import { FileShieldAlt } from "../../components/FileShieldAlt";
import { GoldWrapper } from "../../components/GoldWrapper";
import { HomeIndicator } from "../../components/HomeIndicator";
import { MoneyStackWrapper } from "../../components/MoneyStackWrapper";
import { MoonWrapper } from "../../components/MoonWrapper";
import { SearchAlt2_1 } from "../../icons/SearchAlt2_1";
import { Timer1 } from "../../icons/Timer1";
import "./style.css";

export const DivWrapper = (): JSX.Element => {
  return (
    <div className="div-wrapper">
      <div className="screen-3">
        <HomeIndicator
          className="home-indicator-4"
          rectangleClassName="home-indicator-5"
        />
        <div className="overlap-3">
          <div className="component-4">
            <div className="frame-69">
              <div className="frame-70">
                <img className="image-10" alt="Image" src="/img/image.png" />

                <div className="image-11" />
              </div>

              <div className="frame-71">
                <SearchAlt2_1 className="search-alt" />
                <img className="group-8" alt="Group" src="/img/group-6.png" />
              </div>

              <div className="chart-simple-instance-wrapper">
                <ChartSimpleWrapper />
              </div>

              <div className="moon-instance-wrapper">
                <MoonWrapper />
              </div>
            </div>
          </div>

          <img
            className="status-bar-3"
            alt="Status bar"
            src="/img/status-bar-2.svg"
          />
        </div>

        <div className="component-5">
          <div className="overlap-4">
            <div className="rectangle-5" />

            <div className="frame-72">
              <div className="frame-73">
                <img
                  className="group-9"
                  alt="Group"
                  src="/img/group-14-2x.png"
                />

                <div className="text-wrapper-50">Главная</div>
              </div>

              <div className="frame-73">
                <GoldWrapper />
                <div className="text-wrapper-51">Слитки</div>
              </div>

              <div className="frame-73">
                <FileShieldAlt
                  className="file-shield-alt-instance"
                  fileShieldAlt="/img/file-shield-alt-1.svg"
                />
                <div className="text-wrapper-52">Ордера</div>
              </div>

              <div className="frame-73">
                <img className="group-10" alt="Frame" src="/img/image.svg" />

                <div className="text-wrapper-53">Объявления</div>
              </div>

              <div className="frame-73">
                <div className="group-10">
                  <div className="overlap-group-5">
                    <CoinVerticalWrapper />
                    <div className="group-11" />
                  </div>
                </div>

                <div className="text-wrapper-54">Мои монеты</div>
              </div>
            </div>
          </div>
        </div>

        <div className="frame-74">
          <div className="frame-75">
            <div className="text-wrapper-55">Золотые монеты</div>

            <div className="text-wrapper-55">|</div>

            <div className="text-wrapper-56">Американский орел</div>
          </div>

          <div className="frame-76">
            <div className="frame-77">
              <div className="frame-78">
                <div className="frame-79" />

                <div className="frame-80">
                  <ChevronDownWrapper />
                  <div className="text-wrapper-57">назад</div>
                </div>
              </div>

              <div className="frame-81">
                <div className="text-wrapper-58">
                  Золотая монета “Американский орел”
                </div>

                <div className="text-wrapper-59">1 унция</div>

                <div className="text-wrapper-60">€6,526.36</div>

                <div className="frame-80">
                  <img
                    className="refresh-ccw-clock"
                    alt="Refresh ccw clock"
                    src="/img/refresh-ccw-clock-1.svg"
                  />

                  <div className="text-wrapper-61">Обновление: 00:30 назад</div>
                </div>
              </div>
            </div>

            <div className="image-12" />

            <div className="frame-82">
              <div className="text-wrapper-62">По сумме</div>

              <div className="text-wrapper-63">По количеству</div>
            </div>

            <div className="frame-83">
              <div className="text-wrapper-64">Введите сумму покупки (EUR)</div>
            </div>

            <div className="frame-84">
              <div className="text-wrapper-63">Лимит:</div>

              <div className="text-wrapper-62">$1,000-$10,000</div>
            </div>

            <div className="image-12" />

            <div className="frame-85">
              <div className="text-wrapper-65">Количество:</div>

              <div className="text-wrapper-66">3 монеты</div>
            </div>

            <div className="frame-85">
              <div className="text-wrapper-65">Сумма к оплате:</div>

              <div className="text-wrapper-66">€6,526.36</div>
            </div>

            <div className="frame-85">
              <div className="text-wrapper-65">Проверка подлинности:</div>

              <div className="text-wrapper-67">Да (эксперт JetGold)</div>
            </div>

            <div className="image-12" />

            <div className="frame-86">
              <MoneyStackWrapper />
              <div className="text-wrapper-68">Оплата</div>
            </div>

            <div className="frame-87">
              <div className="frame-88">
                <div className="frame-89">
                  <div className="ellipse-7" />

                  <div className="text-wrapper-69">SEPA Instant</div>
                </div>

                <div className="frame-89">
                  <div className="ellipse-7" />

                  <div className="text-wrapper-69">Банковская карта</div>
                </div>
              </div>

              <div className="frame-90">
                <div className="ellipse-7" />

                <div className="text-wrapper-69">Банковский перевод SEPA</div>
              </div>
            </div>

            <div className="image-12" />

            <div className="frame-85">
              <Timer1 className="timer-1" />
              <div className="text-wrapper-65">Время для оплаты:</div>

              <div className="text-wrapper-70">30 мин</div>
            </div>

            <div className="frame-85">
              <Timer1 className="timer-1" />
              <div className="text-wrapper-65">Время для оплаты наличными:</div>

              <div className="text-wrapper-70">2 часа</div>
            </div>

            <div className="frame-91">
              <div className="text-wrapper-71">Купить Американский орёл</div>
            </div>

            <div className="image-12" />

            <div className="frame-92">
              <div className="text-wrapper-72">Информация о мерчанте:</div>

              <div className="text-wrapper-73">МП Драгоценные металлы</div>

              <div className="frame-86">
                <img className="star-2" alt="Star" src="/img/star-1.svg" />

                <img className="star-2" alt="Star" src="/img/star-2.svg" />

                <img className="star-2" alt="Star" src="/img/star-3.svg" />

                <img className="star-2" alt="Star" src="/img/star-4.svg" />

                <img className="star-2" alt="Star" src="/img/star-5.svg" />

                <div className="frame-93" />
              </div>

              <div className="text-wrapper-74">Сообщение продавца:</div>

              <p className="text-wrapper-75">
                Работаю с безопасной сделкой, так и с отправкой после получения.
                Отправка по всей Европе. Вопросы - в чат. Доставка по Баварии в
                течение дня. Оплата наличными только при самовывозе. Самовывоз в
                Rothenbacher Str/ 1, 90571 Schwaig bei Numberg, Germany.
              </p>
            </div>

            <div className="image-12" />

            <div className="text-wrapper-74">Советы покупателям:</div>

            <p className="text-wrapper-75">
              Только реальные платежи:**
              <br />
              Используйте тот же метод оплаты, что и продавец. Если платеж
              выполнен не в соответсвии с условиями продавца, продавец имеет
              право отказать в сделке и прямо повлиять на использование вашего
              аккаунта.
            </p>

            <div className="image-12" />

            <div className="text-wrapper-74">Важно:</div>

            <p className="text-wrapper-75">
              * В целях безопасности пользуйтесь системой JetGold - ваши деньги
              в сохранности до подтвержения получения монеты и её соответсвия
              <br />
              <br />
              ** Пользуйтесь экспертизой JetGold. Монета проходит экспертизу
              JetGold Trusted Appraiser, монета пересылается Вам с отчётом о
              проверке или возращается продавцу в случае нарушения условий.
            </p>

            <div className="image-12" />

            <div className="frame-94">
              <img
                className="search-alt"
                alt="Triangle exclamation"
                src="/img/triangle-exclamation-1.svg"
              />

              <div className="text-wrapper-76">Предупреждение о рисках:</div>
            </div>

            <p className="jet-gold">
              - Не переводите деньги третьим лицам, оплачивайте строго по
              реквизитам сделки.
              <br />
              <br />- Все споры решаются через арбитраж JetGold.
              <br />
              <br />
              -Выберите защищенную сделку для гарантии сохранности.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
