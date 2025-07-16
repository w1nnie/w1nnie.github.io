// plugins/vue-lazyload.js
import Vue from 'vue';
import VueLazyload from 'vue-lazyload';

Vue.use(VueLazyload, {
  preLoad: 1.3, // 視野外の画像を先読みする割合 (例: 1.3倍)
  error: '/images/error.png', // 画像ロード失敗時の画像（Nuxtのstaticディレクトリなどからのパス）
  loading: '/images/placeholder.png', // ロード中のプレースホルダー画像（Nuxtのstaticディレクトリなどからのパス）
  attempt: 1, // ロード試行回数
  // ...その他のオプション
});
