alert('このウェブサイトは職業訓練の卒業制作で作成したサイトです。制作実績は、授業の一環で制作したものであり、公式サイトとはなんら関係はありません。');

from http.cookies import SimpleCookie

cookie = SimpleCookie()
cookie["session_id"] = "your_session_id_here"
cookie["session_id"]["samesite"] = "Lax"
cookie["session_id"]["httponly"] = True
cookie["session_id"]["secure"] = True  # HTTPS経由でしか送信されないように設定

print(cookie.output())
