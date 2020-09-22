<template>
  <div id="detail-comment-info">

    <div class="header">
      <div>用户评价</div>
      <div>更多</div>
    </div>
    <div class="main">
      <div class="user">
         <img :src="commentInfo.list[0].user.avatar" alt="">

         <div>{{commentInfo.list[0].user.username}}</div>
      </div>
      <div class="comment">{{commentInfo.list[0].content}}</div>
      <div class="footer">
        {{fdate}}
        {{commentInfo.list[0].style}}
      </div>
      <div class="common-img">
          <div v-for=" item in commentInfo.list[0].images" :key = 'item'>
            <img :src="item" alt="">
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {formatDate} from '@/utils/formatDate.js'

	export default {
		name: 'DetailCommentInfo',
    props: {
      commentInfo: Object
    },
    computed: {
      fdate: function() {

        const date = new Date(this.commentInfo.list[0].created * 1000)
        return formatDate(date, 'yyyy/MM/dd ')
      }
    }
	}
</script>

<style scoped>
  #detail-comment-info {
    margin: 10px;
    box-shadow: 0 -2px 0 0 rgba(100,100,100,0.2);
  }
  #detail-comment-info .header {
    line-height: 44px;
    height: 44px;
    display: flex;
    justify-content:space-between;
    box-shadow: 0 2px 0 0 rgba(100,100,100,0.2);
    font-size: 15px;
  }

  #detail-comment-info .main {
    margin: 10px;
    text-align: left;
     font-size: small;
  }
  #detail-comment-info .user {
    line-height: 44px;
    margin: 15px 0;
    display: flex;
    font-weight: 600;
  }
  #detail-comment-info .user img{
   margin-right: 5px;
   width: 44px;
   height: 44px;
   border-radius:100%;
  }
  #detail-comment-info .comment {
    line-height: 20px;
    color: dimgray;
  }

  #detail-comment-info .footer {
    height: 30px;
    line-height: 30px;
    color: darkgray;
  }

  #detail-comment-info .common-img {
    display: flex;
  }
  #detail-comment-info .common-img img {
    margin-right: 5px;
    width: 59px;
    height: 59px;
  }

</style>
