import axios from "axios";
import { APPCODE } from "./config";

// 获取新闻和新闻类别数据


//获取所有新闻频道
export async function getNewsChannels() {
  let resp = await axios.get('http://ali-news.showapi.com/channelList', {
    headers: {
      Authorization: `APPCODE ${APPCODE}`
    }
  });
  console.log(resp.data.showapi_res_body.channelList);
  return resp.data.showapi_res_body.channelList;
}

//获取新闻
/**
 * 按照频道,分页获取新闻
 * @param {*} channelId 频道ID 
 * @param {*} page  页码,从1开始
 * @param {*} limit  每页显示多少条
 */
export async function getNews(channelId,page=1,limit=10) {
  let resp = await axios.get('http://ali-news.showapi.com/newsList',{
    headers: {
      Authorization: `APPCODE ${APPCODE}`
    },
    params:{
      channelId,
      page,
      maxResult:limit,
      needAllList:false
    }
  })
  console.log(resp.data.showapi_res_body.pagebean);
  return resp.data.showapi_res_body.pagebean;
}
