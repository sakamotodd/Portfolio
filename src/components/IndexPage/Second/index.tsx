import React from 'react';

const Introduction = () => {
  return (
    <div id="Home2" className="h-screen w-screen font-serif bg-gradient-to-r from-black to-gray-900 text-white">
      <h1 className="pt-28 text-5xl text-center border-b-2 pb-4 border-black">
        Personal Information
      </h1>
      <div className="flex justify-around space-x-28 mt-12 mx-2 lg:mx-32">
        <img
          src="example.jpg"
          className="w-96 h-[400px] object-cover"
        />
        <div className="">
          <h1 className="text-2xl border-b-2 mb-4">パーソナル情報</h1>
          <h1 className="">坂本 大五郎</h1>
          <h1>１９９７年１１月１４日生まれ</h1>
          <br />
          <h1 className="text-2xl border-b-2 mb-4">経歴</h1>
          <h1>２０２０年　専修大学卒業経済学部経済学科卒業</h1>
          <h1>２０２０年　日本ビジネスエンジニアリング就職</h1>
          <h1>２０２０年４月〜２０２１年１月　　脱Notesプロジェクト参画</h1>
          <h1>
            ２０２１年２月〜２０２１年１２月　　ダイナミック旅行パッケージ開発プロジェクト参画
          </h1>
          <h1>２０２２年１月〜　　SIC開発プロジェクト参画</h1>
          <br />
          <h1 className="text-2xl border-b-2 mb-4">主な使用技術</h1>
          <p>フレームワーク：visual studio</p>
          <p>言語：C#</p>
          <p>DB：mysql(sql-server, A５M２)</p>
          <p>テスト：NUnit</p>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
