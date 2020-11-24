<template>
  <div>
    <v-app-bar fixed app height="100px">
      <h1 class="site-title">テキストパレット</h1>
      <v-form
        class="d-flex align-center mx-auto"
        style="width: 100%; max-width: 1100px"
        ref="form"
      >
        <v-text-field
          v-model="url"
          width="50px"
          class="mt-8"
          label="模写コーディングしたいページのURLを入力してください"
          placeholder="https://〜"
          outlined
          :rules="rules"
        ></v-text-field>
        <v-btn
          elevation="2"
          x-large
          class="mx-5"
          color="primary"
          dark
          :loading="loading"
          @click="get"
          >GET</v-btn
        >
      </v-form>
    </v-app-bar>
    <v-container>
      <v-carousel
        v-if="sldShow"
        v-model="model"
        autoplay="true"
        class="my-auto slider"
      >
        <v-carousel-item v-for="(color, i) in colors" :key="color">
          <v-sheet :color="color" height="100%" tile>
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ text[i] }}</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>

      <v-container>
        <v-simple-table v-if="!sldShow">
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-center" width="5%">コピー</th>
                <th class="text-left">テキスト</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(result, i) in results"
                :key="i"
                v-clipboard:copy="result.text"
                class="result"
                @click="result.copy = true"
                style="position: relative"
              >
                <v-chip
                  color="primary"
                  v-show="result.copy"
                  class="badge"
                  style="position: absolute"
                  >ok!
                </v-chip>
                <td class="d-flex align-center justify-flex-start">
                  <v-btn
                    v-clipboard:copy="result.text"
                    color="transparent"
                    elevation="0"
                    @click="result.copy = true"
                  >
                    <v-icon>mdi-content-copy</v-icon>
                  </v-btn>
                </td>
                <td>{{ result.text }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
        <a
          href="https://twitter.com/intent/tweet?text=テキストパレット|%20模写コーディングで役立つテキストコピペツール&url=https://youthful-albattani-cc8d58.netlify.app"
          target="_brank"
          class="alert"
        >
          <v-alert
            v-model="alert"
            color="cyan"
            border="left"
            elevation="2"
            colored-border
            icon="mdi-twitter"
          >
            Twitterで共有
          </v-alert>
        </a>
      </v-container>

      <v-alert v-if="fail" border="top" color="red lighten-2" dark>
        ページの取得に失敗しました。URLを見直してみてください。
      </v-alert>
    </v-container>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData() {
    const { data } = await axios.get(
      'https://bubekiti.microcms.io/api/v1/image',
      {
        headers: { 'X-API-KEY': 'b99a477f-fdaa-43e0-8a72-de34af047371' },
      }
    )
    return {
      ogImage: data.image.url,
    }
  },
  data() {
    return {
      ogImage: '',
      alert: true,
      loading: false,
      fail: false,
      title: 'Vuetify.js',
      rules: [(v) => !!v.length || 'URLを入力してください'],
      model: 0,
      colors: ['#01579BFF', '#0288D1FF', '#29B6F6FF', '#EF5350FF'],
      text: [
        '＼使い方／',
        '↑模写したいページのURLを入力',
        '↓テキスト一覧が表示されます',
        'コピーボタンでテキストをコピー！',
      ],
      url: '',
      sldShow: true,
      results: [],
    }
  },
  methods: {
    async get() {
      if (!this.$refs.form.validate()) return
      this.loading = true
      try {
        const { data } = await axios.get(
          `https://7s54krtiai.execute-api.ap-northeast-1.amazonaws.com/default/pythontest?url=${this.url}`
        )
        this.results = data.map((d) => {
          return {
            text: d,
            copy: false,
          }
        })
      } catch (e) {
        this.fail = true
      } finally {
        this.sldShow = false
        this.loading = false
      }
    },
    goTwitter() {},
  },
  head() {
    return {
      meta: [
        { property: 'og:image', content: this.ogImage },
        { property: 'twitter:image', content: this.ogImage },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
.result:hover {
  cursor: pointer;
}
.slider {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 1200px;
}
.site-title {
  font-family: 'Noto Sans', sans-serif;
  font-size: 1.5rem;
  position: absolute;
  left: 30px;
}
.alert {
  width: 200px;
  position: fixed;
  bottom: 30px;
  right: 30px;
  text-decoration: none;
}
@media screen and (max-width: 1600px) {
  .site-title {
    display: none;
  }
}
@media screen and (max-width: 768px) {
  .alert {
    display: none;
  }
}
</style>
