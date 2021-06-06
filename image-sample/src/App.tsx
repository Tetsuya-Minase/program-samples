import React, { useState } from 'react';
import './App.css';

const App: React.VFC = () => {  
  return (
    <label>
      画像: 
      <input type="file" accept="image/png, image/jpeg" onChange={ async (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files === null) {
          return;
        }
        const reader = new FileReader();
        reader.onload = (e: ProgressEvent<FileReader>) => {
          if (typeof e.target?.result === 'string') {
            // ,より後ろがbase64文字列なので区切って2番目を取得
            console.log('base64文字列：', e.target.result.split(',')[1]);
          }
        }
        reader.readAsDataURL(e.target.files[0]);
      }}/>
    </label>
  );
}

export default App;
