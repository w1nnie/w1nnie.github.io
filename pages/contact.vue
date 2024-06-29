<template lang="pug">
.contact-container
  CustomTransition
  .contact-flex
    .head.menu-head おしながき
    .menu
      .pixelart-container
        .item.title
        .item.size 小サイズ <br><span class = "subitemtext">アイコンなどに 長辺100px程度</span>
        .item.size 大サイズ <br><span class = "subitemtext">一般的な一枚絵 長辺300px程度</span>
        .item.anime アニメーション<br>なし
        .item.price
          .sample
            img(src="/images/contact/small_1.png")
            img(src="/images/contact/small_2.png")
          .text 5000<span class="span">円</span>
        .item.price
          .sample
            img(src="/images/contact/big_1.png")
            img(src="/images/contact/big_2.png")
          .text 15000<span class="span">円</span>
        .item.anime アニメーション<br>あり
        .item.price
          .sample
            img(src="/images/contact/small_anime_1.gif")
            img(src="/images/contact/small_anime_2.gif")
          .text 10000<span class="span">円~</span>

        .item.price
          .sample
            img(src="/images/gallery/steria_forest.gif")
            img(src="/images/gallery/steria_room.gif")
          .text 30000<span class="span">円~</span>
      .caution デザインを考案する必要がある場合、表示金額とは別途のデザイン料をいただきます。<br>アニメーションについてはフレーム数の多さ(滑らかさ)によって上乗せする場合があります。<br>MVも制作可能です。カット数や演出及び報酬は要相談です。 <br>相談を経てお見積りしますので気軽にご連絡ください。
      .mv-container
    .head.flow-head 制作の流れ
    .flow
      .process
        .second-head 連絡
        .text 必要事項を記入したメールを送って下さい。<br>必要事項は下記の通りです。
      .process
        .second-head 合意
        .text メールの内容から制作の可否、制作時期、見積もりの決定をします。<br>双方の合意の上で制作を始めます。この段階までキャンセル可能です。
      .process
        .second-head 制作
        .text トラブルのないよう、制作段階ごとに進捗を報告します。
      .process
        .second-head 受渡
        .text 完成後、振込先を送りますので入金をお願いします。<br>入金確認後に完成品を渡します。
      .arrow
    .mail-text
      .second-head メール文面の必要事項
      .point ・制作物について <span class="subtext">サイズやアニメーションの有無、参考画像や用途などなるべく詳細に</span> <br>・納期 <span class="subtext">いつまでに制作すればよいか</span> <br>・振り込み方法 <span class="subtext">paypalまたは銀行振込</span> <br>・連絡の取りやすい媒体 <span class="subtext">XまたはDiscordまたはメール</span> <br>・配信に載せてもよいか <span class="subtext">活動の一環で配信をしています 情報を出したくない場合はいいえの意思表示を</span>
    .mail-caution 以上確認しましたら、下記のメールアドレスにご連絡ください。<br>また企業様はこの限りではありません。要件と報酬の提示の上ご連絡をお願いします。
    .mail-address wh.negi@gmail.com
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'ContactPage'
})
</script>

<style scoped lang="scss">
@import "~/assets/sass/app";

.contact-container {
  @extend %grid;

  overflow-y: scroll;
  width: 100vw;
  height: 93vh;
  position: relative;
}

.head {
  font-size: 3vw;
  width: 25%;
  background: $accent-color;
  border: solid 1px $deep-grid-color;
  box-shadow: 2px 2px $deep-grid-color;
  margin: 3vh 0;
  text-align: center;
  color: $deep-grid-color;
}

.second-head {
  background: $sub-color;
  font-size: 1.7vw;
  width: 100%;
  margin: 1vh 0;
  color: $deep-grid-color;
  text-align: center;
}

.contact-flex {
  width: 80%;
  position: absolute;
  left: 10%;
  top: 2%;

  .menu {
    width: 100%;
    margin-bottom: 10vh;
    display: flex;
    flex-flow: column;

    .pixelart-container {
      width: 100%;
      height: 70vh;
      background: $bg-color;
      border: solid 1px $deep-grid-color;
      box-shadow: 2px 2px $deep-grid-color;
      display: grid;
      grid-template-columns: 1fr 3fr 5fr;
      grid-template-rows: 1fr 3fr 3fr;

      .item {
        border: 1px solid #aaa;
        display: flex;
        flex-flow: column;
        justify-content: space-evenly;
        align-items: center;
        font-size: 1.2vw;
        text-align: center;

        .subitemtext {
          font-size: 1vw;
          color: $theme-color;
        }

        .sample {
          display: flex;
          flex-flow: row;
          gap: 2%;
        }

        img {
          max-height: 22vh;
          height: 10vw;
          border: solid 1px $deep-grid-color;
          image-rendering: pixelated;
        }
      }

      .title {
        font-size: 1.5vw;
        border: 1px solid $deep-grid-color;
      }

      .anime {
        background: $grid-color;
        color: $deep-grid-color;
        border: 1px solid $deep-grid-color;
      }

      .size {
        background: $grid-color;
        color: $deep-grid-color;
        border: 1px solid $deep-grid-color;
      }

      .price {
        font-size: 1.8vw;
        font-family: Helvetica;

        .span {
          font-size: 1.3vw;
          margin-left: 0.1vw;
        }
      }
    }

    .caution {
      width: 60%;
      display: inline-block;
      font-size: 1vw;
      color: $deep-grid-color;
      margin-left: 20%;
      margin-top: 1vh;
      padding: 1vw;
      background: $bg-color;
      border: 1px solid $deep-grid-color;
      box-shadow: 2px 2px $deep-grid-color;
    }

    .mv {
      width: 100%;
      background: #999;
    }
  }

  .flow {
    height: 20vh;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 2vh;
    position: relative;

    .process {
      width: 20%;
      background: $bg-color;
      border: solid 1px $deep-grid-color;
      box-shadow: 2px 2px $deep-grid-color;
      padding: 0 0.2vw;
      z-index: 2;

      .text {
        margin: 0.6vw;
        font-size: 0.86vw;
        color: $deep-grid-color;
      }
    }

    .arrow {
      position: absolute;
      width: 50vw;
      height: 1vh;
      top: 10vh;
      background: #555;
      z-index: 1;
    }
  }

  .mail-text {
    display: inline-block;
    width: 70%;
    margin-left: 15%;
    background: $bg-color;
    border: solid 1px $deep-grid-color;
    box-shadow: 2px 2px $deep-grid-color;
    margin-bottom: 10vh;
    padding: 0.5vw;
    color: $deep-grid-color;

    .point {
      font-size: 1.1vw;
      position: relative;

      .subtext {
        margin-left: 1vw;
        font-size: 1vw;
        color: #666;
        position: absolute;
        left: 15vw;
      }
    }
  }

  .mail-caution {
    display: inline-block;
    text-align: center;
    font-size: 1vw;
    width: 60%;
    margin-left: 20%;
    color: $deep-grid-color;
    margin-bottom: 1vh;
  }

  .mail-address {
    font-size: 3vw;
    color: $theme-color;
    font-family: Helvetica, Arial;
    background: $bg-color;
    border: 1px solid $deep-grid-color;
    box-shadow: 2px 2px $deep-grid-color;
    width: 60%;
    margin-left: 20%;
    margin-bottom: 20vh;
    display: inline-block;
    text-align: center;
  }
}

</style>
