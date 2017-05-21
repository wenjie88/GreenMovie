<template>
  <!--<div class="gridlist-demo-container">
                              <div v-for="tile, index in list" :key="index">
                                  <mu-card>
                                    <mu-card-header title="Myron Avatar" subTitle="sub title">
                                    </mu-card-header>
                                    <mu-card-media title="Image Title" subTitle="Image Sub Title">
                                      <video :src="tile.video" controls='controls' type="video/mp4"></video>
                                    </mu-card-media>
                                    <mu-card-title title="Content Title" subTitle="Content Title" />
                                    <mu-card-text>
                                      散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。 调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。 似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光， 找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
                                    </mu-card-text>
                                    <mu-card-actions>
                                      <mu-flat-button label="Action 1" />
                                      <mu-flat-button label="Action 2" />
                                    </mu-card-actions>
                                  </mu-card>
                                </div>
                            </div>-->
  <div class="content">
    <div class="card" v-for='item, index in list' :key>
      <div class="title">{{item.title}}</div>
      <div class="media">
        <!--<video v-bind:src="item.video" controls='contols'></video>-->
        <img :src="item.video">
      </div>
    </div>
  </div>
</template>


<script>
import ajax from '../../config/ajax.js'
export default {
  data() {
    return {
      list: [
        { video: '/src/assets/image.jpg', title: 'hah1', author: 'wen' },
        { video: '/src/assets/image.jpg', title: 'hah2', author: 'wen' },
        { video: '/src/assets/image.jpg', title: 'hah3', author: 'wen' }
      ]
    }
  },
  created(){
    console.log("creat")
    ajax.post('http://www.baidu.com',{data:"haha",name:"10",s:{name:'pp',nili:'ss'}})
  }
}
</script>

<style lang='less' scoped>
.content {
  display: flex;
  flex-flow: wrap;
  padding-right: 15%;
  padding-left: 15%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden; 
  justify-content: center;
  .card {
    width: 300px;
    overflow: hidden;
    height: 180px;
    flex: 0 0 auto; // margin: 0 auto;
    padding: 5px;
    img {
      width: 100%;
    }
  }
}

@media (max-width:790px) {
  .content {
    padding-right: 0;
    padding-left: 0;
    margin-right: 0;
    margin-left: 0;
    .card {
      width: 100%;
      flex: 0 0 100%;
    }
  }
}



.div {
  display: flex;
  background-color: yellow;
  height: 50%;
  width: 50%;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: stretch;
  align-content: flex-start;
}

.child1 {
  height: 100px;
  /*width: 100px;*/
  background-color: paleturquoise;
  flex: 0 0 100px;
}

.child2 {
  height: 100px;
  /*width: 100px;*/
  /*flex-shrink:0;*/
  background-color: saddlebrown;
  /*flex-grow:1;*/
  flex: 0 0 100px;
}

.child3 {
  /*height: 100px;*/
  /*width: 300px;*/
  background-color: aquamarine;
  /*flex-grow:2;*/
  /*flex-basis:100px*/
  flex: 1;
  /*align-self:flex-start;*/
}
</style>
