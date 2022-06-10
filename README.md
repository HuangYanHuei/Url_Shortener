# URL Shortener 短網址產生器

## 介紹

將長長的網址縮成短短的「短網址產生器」

## 專案畫面

![image](https://github.com/HuangYanHuei/Url_Shortener/blob/main/public/img/1.png?raw=true)

![image](https://github.com/HuangYanHuei/Url_Shortener/blob/main/public/img/2.png?raw=true)

## 功能

- 輸入網址轉換成短網址
- 點擊按鈕複製網址
- 透過短網址轉址到原本網址

## 開始使用

1. 請先確認有安裝 node.js 與 npm
2. 將專案 clone 到本地
3. 在本地開啟之後，透過終端機進入資料夾，輸入：

   ```bash
   npm install
   ```

4. 安裝完畢後，設定環境變數連線 MongoDB

    ```
    MONGODB_URI=mongodb+srv://<Your MongoDB Account>:<Your MongoDB Password>@cluster0.xxxx.xxxx.net/<Your MongoDB Table><?retryWrites=true&w=majority
    ```
5. 安裝 nodemon 套件

    ```
    npm install -g nodemon
    ```

6. 安裝完畢後，繼續輸入：

   ```bash
   npm run dev
   ```

7. 若看見此行訊息則代表順利運行，打開瀏覽器進入到以下網址

   ```bash
   Listening on http://localhost:3000
   ```

## 開發工具

- Node.js 14.16.0
- Express 4.17.1
- Express-Handlebars 5.3.3
- MongoDB
- mongoose 6.0.5