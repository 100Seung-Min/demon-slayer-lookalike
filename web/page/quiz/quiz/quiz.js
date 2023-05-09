var character = ["카마도 탄지로", "카마도 네즈코", "아가츠마 젠이츠", "하시바라 이노스케", "렌고쿠 쿄쥬로", "우즈이 텐겐", "칸로지 미츠리", "히메지마 교메이", "토키토 무이치로", "이구로 오바나이", "토미오카 기유", "코쵸우 시노부", "시나즈가와 사네미", "코쵸우 카나에", "우로코다키 사콘지", "쿠와지마 지고로", "츠유리 카나오", "시나즈가와 겐야", "칸자키 아오이", "카이가쿠", "무라타", "우부야시키 카가야", "하가네즈카 호타루", "키부츠지 무잔", "스사마루", "야하바", "루이", "코쿠시보", "아카자", "도우마", "굣코", "다키", "한텐구", "나키메", "쿄우가이", "엔무", "타마요", "유시로", "규타로", "산", "아시타카", "에보시 고젠", "가마 할아범", "가오나시", "유바바", "하쿠", "치히로", "보우", "린", "마르클", "설리반", "소피", "캘시퍼", "하울", "황야의 마녀", "허수아비", "나우시카", "아스벨", "크샤나", "도라", "파즈", "시타", "토토로", "키키", "고양이 버스", "포뇨", "소스케", "후지모토", "그랑 맘마레", "아리에티", "쇼우", "요시오카 하루", "바론", "짱구", "신형만", "봉미선", "신짱아", "흰둥이", "김철수", "한유리", "이훈이", "맹구", "한수지", "치타", "원장선생님", "채성아", "나미리", "차은주", "철수엄마", "유리엄마", "훈이엄마", "유이슬", "박광자", "액션가면", "도라에몽", "노진구", "노석구", "만퉁순", "도라미", "신이슬", "왕비실", "만퉁퉁", "박영민", "오진숙", "코난", "남도일", "유미란", "유명한", "홍장미", "한아름", "고뭉치", "박세모", "안기준", "정보라", "양세라", "고희도", "하인성", "서가영", "골롬보", "신형선", "오지인", "백동훈", "이명수", "진", "워커", "베르무트", "키안티", "루피", "조로", "상디", "우솝", "징베", "나미", "쵸파", "크로커다일", "빅맘", "샹크스", "키자루", "아카이누", "아오키지", "후지토라", "거프", "카타쿠리", "흰수염", "검은수염", "브룩", "로빈", "프랑키", "카이도", "버기", "마르코", "사보", "에이스", "미호크", "트라팔가 로", "도플라밍고", "보아 핸콕", "봉쿠레", "쿠마", "캡틴 키드", "호킨스", "쥬얼리 보니", "아론", "제프", "시키", "골 D. 로저", "레일리", "네코마무시", "코즈키 오뎅", "센고쿠", "스모크", "코비", "타시기", "X 드레이크", "카쿠", "로브루치", "마젤란", "한냐발", "이반코프", "비비", "코알라", "레이주", "라분", "쿠레하", "히루루쿠", "페로나", "시라호시", "레베카", "모모노스케", "킨에몬", "제트", "에넬", "이누아라시"];
var img = ["https://mblogthumb-phinf.pstatic.net/MjAxOTExMTBfMjIg/MDAxNTczMzE4MjU4NzE3.FIcHq4HQ7wbvUQdF_Y7s79SdpNQvIfmtIrM3h5vxiKcg.Iq_0iGOyZo_v1UIs15n3JpUPbp0jKFKK9XNQC1M2WZEg.GIF.woojin2352/1573318109.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjFfMTkg/MDAxNTgyMjc5MDc1ODk4.Rzu_W3J2MkMQY-9-XB-p-dHmEBsB14FszWgo6OcD7HYg.Dbed6kNXtZbUW4dWitnDblhLvAzUPkW1QRrMGacYOM0g.GIF.slpooda/original.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDA4MTlfODUg/MDAxNTk3ODI4NjgwMzc3._m9UOVROh6gl4BkYqayIgT_5QUMDWmhfQL9pDGKKpf0g.U8FCvmjfQElIDckbxNEwzlAmUwuUelkOGk_YN0EUOqIg.GIF.hanihani517/NaverBlog_20200819_181759_01.gif?type=w2", "https://blog.kakaocdn.net/dn/bONNM2/btqAMPKXJCL/BckOcI2PRGM2oX52HN3rEK/img.gif", "http://pds18.egloos.com/pds/201910/21/26/b0365026_5dad2334a3247.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MjBfMjEz/MDAxNTg3Mzg4NTk2Njkz.klSu2rulNOrKfbiDcaaZT2NE1JZagoswqAQA1Zjyqi4g.uoQJHT5YJVVN20054Q1WqOguOa5XfOMOIL98OsCTT7kg.GIF.jicn9195/1580390150715.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMDZfMTE5/MDAxNTgzNDk1NzMzNTg0.EzC7OyrrkyKdaschgn7rJm4JPXdp03DDMOdXmRvlzDkg.M7whQ9UmZlgqdCKxLKiM2EkVjemoHBCdBqoFdO-wBUAg.GIF.slpooda/3.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDEwMTRfMTEz/MDAxNjAyNjg1NzI4NTAy.EZNLhMQadHJIb4mY0RiuSF8QFJ4xnVQMnSSz-du9Ft8g.m9e6FtKJf5lIODcQri_eYJK05ocMBYteE_rWil3To8wg.GIF.97_ele_na/IMG_3088.GIF?type=w800", "https://www.otakutest.kr/image/test/1627635524965_0", "https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTFfMjYw/MDAxNTc2MDcyMTY4MDg4.W9oUI8K30Trn6oQcT6NqJJuK7Brbi-3FWwlr1gn2K00g.ERQ3XCGXXJiOjZK1843x5ULikjLydfawNs7qLELtO8Qg.GIF.jiyun6097/3b48c2ca1418032ba522eab63254dae5.gif?type=w800", "https://t1.daumcdn.net/cfile/tistory/99C91D335D5F8FE001", "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMjdfMjY1/MDAxNTgyODA0MzMwNzE4.59AS9ZlZDjPJpBCKOKc2js-ONx8IKrz3iqrzTprCE2kg.ZWaR0sro8DxjsBaI03wCfZr29PDcOVYKcMt5S899Jjcg.GIF.slpooda/8215b837c43a9e3f0ad6df4d61e44acd.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMThfMjk5/MDAxNTc5MjkyOTA2MjEy.fKxHZ2Z4dIPigdifWudxeHfJhLIqMgtQK4D-Q64VcUcg.clYPzYcTq-ZvsJ944Kef6op_EPsV8b0Aar0Oo05z9xwg.GIF.lovere_/KakaoTalk_20200118_045914546_01.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxOTEwMTFfMTIy/MDAxNTcwNzI1NTA4Mzg0.rJZ4j1CDKz3f9Z_x15ibZdiYMKwLi_ApO0GubbTY6IYg.NVs7hQEc6-jmchlC_aM-YUS-5fgj7lWEymgxMFhFSUMg.GIF.inhuckjin85/(%EA%B7%80%EB%A9%B8%EC%9D%98%EC%B9%BC%EB%82%A025%ED%99%94)_%EC%BD%94%EC%B5%B8%EC%9A%B0_%EC%9E%90%EB%A7%A44.gif?type=w800", "https://t1.daumcdn.net/cafeattach/1YmK3/3062a76b8bb40afb3bcc83753fd567e8029d4b79", "https://blog.kakaocdn.net/dn/C4274/btq4cFZNYFw/QnoqJGmkbIZiKVNNO4tSc0/img.png", "https://mblogthumb-phinf.pstatic.net/MjAxOTExMDZfMTkz/MDAxNTcyOTc1NTUwOTg3.sUYg_4dFd4pjHd94Pax8dGC8-ChL4cNuAo2ohYg0BuMg.7FhKr7TRheE8DzXTuki9YD0UDjOgFF2_KXcLLLV07Dsg.GIF.inhuckjin85/(%EA%B7%80%EB%A9%B8%EC%9D%98%EC%B9%BC%EB%82%A026%ED%99%94)_%EB%91%90%EA%B7%BC%EB%91%90%EA%B7%BC_%EC%B9%B4%EB%82%98%EC%98%A4.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMTAxMDZfMjkz/MDAxNjA5OTE4ODE3OTY2.EunOztd-2BMBSVeILKadre6x3O3z0MB5ILjye8GskyEg.h1YasGvmw1c5l1gclLYZqOr0KuJGSTGs4inOJbE9-kIg.GIF.dldmstj0944/IMG_1067.GIF?type=w800", "https://img.chuing.net/i/QVGVuGJ/a778827-20190908-011714-000.gif", "https://64.media.tumblr.com/894a8ad62edece10053a93eb338e092b/tumblr_pvbqng50Jt1r60zuio1_540.gif", "https://thumbs.gfycat.com/IncompleteScholarlyGrayfox-size_restricted.gif", "https://mblogthumb-phinf.pstatic.net/MjAxOTEyMDZfMTI4/MDAxNTc1NjMyMTI4OTE5.6aWqt1vzisfzT2GyPDtHE0WICcxJqUE7HrwoJIQ9Zncg.izKRmKu-KoLIeg1MrshjEmiKwtoAwubgKJuOnlMrYWAg.GIF.jiyun6097/e7a6039c-2666-4d93-94e6-ddea8b152121-1430737784012.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDNfNDUg/MDAxNTg1OTExMTA4ODQ3.Zyx-fQ5cB7u6gXKBQI6PsdXnAVYY_bg8f0yLCxSfqdIg.PDMZkREJeWDTzdI7pgYWE-RtRJ0OVQubRg7jiULKevIg.GIF.yejinko520/1585911107883.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMjFfMjU3/MDAxNTc5NjAyMjMwMTky.oDJowd6SEmi57E59D0-9ZeC2RHrLjL9mnYwU_W138Gog.6gI-vqnaH9_s9-_rC-tFQ7wmsdVDXyMIDfMq57zRvvgg.GIF.papdghmoon/1.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDJfMSAg/MDAxNTU5NDA1ODg4MjEw.7cMsun8DSnnxSzTx5AwSvzi2emm2Z-uBsueVQt3PKnUg.K3ONo--9Wj1qtsxO5v8Z0vxr99PoNFeenKGrsd0Vsuog.JPEG.max9607/Ohys-Raws_Kimetsu_no_Yaiba_-_09_(BS11_1280x720_x264_AAC)_0000300423ms.jpg?type=w800", "https://1.gall-img.com/tdgall/files/attach/images/82/844/188/067/b765e8887e52dda2be17dd944a9acdd5.png", "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MDFfODEg/MDAxNTk4OTI0MjM4MTM3._nroD7iRTJo7Kv4Q4YO0XQgghYMY5pvg_qJFi-e_lgMg.2b7vY0wPS4qL_VUn8JrltGKPVziArxK6zpuCEJMEl8Ug.GIF.daffodil22/1598924235351.GIF?type=w800", "https://pbs.twimg.com/media/Fb0rCVGVUAAUGg8.jpg", "http://file3.instiz.net/data/file3/2021/05/10/9/3/2/93292f07693424a4f22f8f248119ea6a.gif", "https://1.gall-gif.com/tdgall/files/attach/images/82/015/610/212/8e3d4b1255ddd9bc8f0d74668831ae8e.gif", "https://image.fmkorea.com/files/attach/new2/20220105/486616/1028630410/4225257483/99b983892094b5c6d2fc3736e15da7d1.png", "https://simg.donga.com/ugc/MLBPARK/Board/16/13/39/69/1613396928029.gif", "https://blog.kakaocdn.net/dn/bR7vjr/btqZIA3VyZQ/NYphTr1yTkKXp2VI3oKCkk/img.jpg", "https://postfiles.pstatic.net/MjAyMTAyMDRfMTY3/MDAxNjEyMzk2NDQzOTU5.f-SnZb1BA4xlq9cPuhqKcCfmFJqwmH9nLZ53SGEmUnwg.y3hUX3aAtek0JzwdLo5RCUyZy44xI7zHIQz8JHi_xc0g.JPEG.9913065/%EB%82%98%ED%82%A4%EB%A9%94.jpg?type=w773", "https://post-phinf.pstatic.net/MjAyMTA5MDlfMTI4/MDAxNjMxMTc2NTI3MjY4.w92Go0MCZ5LjoVOjOx4jq2_aFDdnvbscYgmSUqr-Kywg.qfyAv_aaY-i7IOtAJgbtqNwUYSjhV4cVBNcLcsQcgTIg.JPEG/210909_%EA%B7%80%EB%A9%B8%EC%9D%98%EC%B9%BC%EB%82%A0_1%EA%B8%B0_13%ED%99%94_%EC%95%A0%EB%8B%88_19.jpg?type=w1200", "https://i.pinimg.com/originals/93/27/4c/93274c1e773c520d5fa76241fb99ba6b.gif", "https://img.dmitory.com/img/201910/2AQ/MD9/2AQMD9K1vyeWAoGiKoyAuk.gif", "https://postfiles.pstatic.net/MjAyMDAzMTRfMTgz/MDAxNTg0MTg3MzAyNTQ1.257OX5PO8UEXyiN9h1RE9G2UjwEebU99tyh8-cjPALAg.0P3nw-bQXs4_E7yQn_9rOZyyjHml4-qtbdeQuPQjNPcg.GIF.slpooda/%EC%9C%A0%EC%8B%9C%EB%A1%9C.gif?type=w773", "https://mblogthumb-phinf.pstatic.net/MjAyMjAxMTdfNSAg/MDAxNjQyNDE3ODE2OTQ1.ogN_ULdXATUwJj4yd_0zlvfDlUoxFuN4vq9Buzcwmy8g.6RNy2h3uAbq-_M7jxLrxbOMQfI11N7Ry4fD3cgScOY8g.GIF.fjdkeivn/2.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAxMTVfODEg/MDAxNTc5MDYwNjM0MTc4.099JrFdIWAnLfY91fRFudJn-xe7v-8Mr_Fj-VnNQyIcg.190t2-4UgZRvzEygmzIkhOOWjU5wbVYvDJht6bGMkCog.GIF.unfadable_/4647e4396cd6349a27ff242aa92ef51a.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDExMzBfMjIz/MDAxNjA2NzE5OTU5NDA3.scHWyYM7-DuRjDFQ9_jqoSsvvLrDnjUMK_VvcDecX3wg.lf7UqkLmm9qqd7gnD_ZNrYG2Z7nLPf8Gt_fF6Y34nEwg.GIF.nodoubtshe/3-1.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDZfNjMg/MDAxNTg2MTUwMTE4NjM4.wUNZqFOwJgQEA7hOpKcOQ-d129fEG9jcMd3_B2DDuJkg.TRsbm7ru7wDzQslxavYeEDd2RII7wGRMWONEZPETdBAg.GIF.eunjiyoon03/%EC%97%90%EB%B3%B4%EC%8B%9C_(1).gif?type=w800", "https://thumbs.gfycat.com/OrganicCelebratedEmeraldtreeskink-size_restricted.gif", "https://mblogthumb-phinf.pstatic.net/MjAxODEwMjlfMjEz/MDAxNTQwNzk5NzMwMjIy.BIxALhIwdlDa4UI-zkTvbKNYvyTT-Zjjq_wM2TR0Z4Ig.dcHblUgozbPe04NAmoX6ZOvJ17i3blZL2jW0JWX0bVwg.GIF.wkqch9/DmhOm1X.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/20160622_151/saaya1217_1466578005363IpkuA_GIF/%C0%AF%B9%D9%B9%D9.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxNzA2MTBfMTQy/MDAxNDk3MDgwMjM1MTcy.Gzad3v107IaIHdaG7m9HdSsGFQTp6TxksebTfmFFdKQg.KHilcbsewRt1314DS6OO-OHgZdWGS1xaI6AdkuA0sU0g.GIF.sayaoikies777/daum_gallery_photo_20170610113938.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTdfMjQ3/MDAxNTAyOTc2OTQ3ODg4.xKjR0Nvz9DgXhQkm6iJgqm5XO_TFUjhVyXj3F2RmMaQg.KtEN7k9mtcuVgxsNnevvg_yH2WKb8P5qaIGgFWYtIBAg.GIF.sinnam88/%EC%84%BC%EA%B3%BC_%EC%B9%98%ED%9E%88%EB%A1%9C%EC%9D%98_%ED%96%89%EB%B0%A9%EB%B6%88%EB%AA%85_%EC%9B%80%EC%A7%A4_%2827%29.gif?type=w800", "https://38.media.tumblr.com/50bb36cff3ac667ec2a6f5273c562117/tumblr_naxqnwSQVY1t89rpeo1_500.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTBfMjEw/MDAxNTg2NDk3Mjk4Mzc2.8j50stnY00aI73Uacv2G9F8gaGT1sRh2i7TkxHMmzw4g.jNcX9IaxzwSEhmXKu_yImFV8ENqHbQkWXTRyr0TTOLYg.GIF.suribyblossom_drama/original_(11).gif?type=w800", "https://mblogthumb-phinf.pstatic.net/20141213_265/nightsho_14184233971070jvX5_GIF/%B9%AB%C1%A63.gif?type=w2", "https://postfiles.pstatic.net/MjAyMDA0MDhfMTkx/MDAxNTg2MzIzNTE4NTQw.WH3rbMy99dQ8xOxZdqFUyljrDI-WhQMjdutpgUbQqeUg.YSo1goLYBqPkZBInMprkold3fFdu7XkpOnR-xBA-jg4g.PNG.crews_official/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%95%B4%EC%84%9D_(2).png?type=w966", "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTFfNDUg/MDAxNTAyMzk5MDk0MDQx.gxei__hsTM1tacX7LLR30gHVgsxQCTnp4hMJJFr_3jEg.TK6s6VNb8IHm0GsZ2iX7QJ-Cb3IE30iyTppjjuUYxk4g.GIF.btskook91/tumblr_opuog4ZQAP1uojky7o1_540.gif?type=w2", "http://file3.instiz.net/data/file3/2018/03/19/8/9/a/89a1a047703541f09ca257f91cdc035b.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzA4MTFfMTEg/MDAxNTAyMzk4NTcxOTc5.e7vQKFk0tUKYF-hWtTQ9smKLC1MkI9gA7ZPp_-9eQlcg.BtxR2w9OFrn3bZLNXuM-OFkAMfxZhEkjS_fv34r5Hc4g.GIF.btskook91/tumblr_ogg073CsS41ulrwwwo1_540.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMDZfMjE1/MDAxNDg2MzYwMjM0NzE0.mt90dJsmBWvxpvT_ySQMxqI050DyCRIfr8C_zrEafMEg.0w5P2_T8ArtQch2XmxqsdGo7d4DDAk2YtRJ6pYLJyKog.PNG.hanbeak0308/2017-02-06_14%3B49%3B31_0.png?type=w2", "https://blog.kakaocdn.net/dn/bkEIMc/btqC5pwDiTS/l4WWnHPwGRPaj2fcxPWXyK/img.gif", "http://i.imgur.com/iDNixLV.gif", "https://mblogthumb-phinf.pstatic.net/20161005_239/vkti1122_14756282943900pso1_JPEG/movie_image.jpg?type=w2", "https://t1.daumcdn.net/cfile/tistory/2729853A566007C739", "https://68.media.tumblr.com/73abf3c4a604b64b4ed3d5dad1ffeee8/tumblr_inline_oq2kk0UQgt1sebu2v_540.gif", "https://thumbs.gfycat.com/CreativeOddCardinal-size_restricted.gif", "http://i.imgur.com/5sSw7WQ.gif", "https://steamuserimages-a.akamaihd.net/ugc/3299190295345444513/1470A7C0751981A5A011688B373D812A00915756/?imw=1024&imh=551&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true", "http://i.imgur.com/ehRrVaZ.gif", "https://thumbs.gfycat.com/AngelicColorlessHornedtoad-size_restricted.gif", "https://i.pinimg.com/originals/e1/9e/ce/e19ece29d57135a0c72c1bf7e619eddc.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNjExMjRfMjcx/MDAxNDc5OTc3MTE1Mzc1.ZPX1J7MSUEthagNebLi3hdT6_qT5V0Q4EcrJSIKgVScg.Dh85fpVwJP5216MGjBMZgUBZ1XwLcdzhDRUYHqM4NF8g.GIF.sinnam88/%EB%B2%BC%EB%9E%91%EC%9C%84%EC%9D%98_%ED%8F%AC%EB%87%A8_%EC%9B%80%EC%A7%A4_%EB%AA%A8%EC%9D%8C_%2822%29.gif?type=w800", "https://i.pinimg.com/originals/b9/b7/2d/b9b72d4238a42b9e43e1543c233587e7.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMTA1MDlfOTQg/MDAxNjIwNTY5NjY1Njg2.AoHgAoJO4J-eJY_nxMFc05MO9WwpIHyHFxEmdfmqZiwg.j19i-8THHlkNOXZ4Wx4SFbm7hgxAS_kx8hF397qMNQgg.JPEG.yancu32/%EB%B2%BC%EB%9E%91%EC%9C%84%EC%9D%98_%ED%8F%AC%EB%87%A8_(2).jpg?type=w800", "https://mblogthumb-phinf.pstatic.net/20131031_288/ho809_1383225502094J9oID_GIF/anigif.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxNzAzMjNfMjkg/MDAxNDkwMjYwNjU4MDQ1.M1q2BawXEE4pKm02BPq6cAcjPyq7ZQ864yKukJHaCmcg.8LDksn68Zu7GYjOYxOK9Hvs3_kKG9FWFV0GR1pRn6Igg.GIF.the2asy/%EB%A7%88%EB%A3%A8%EB%B0%91%EC%95%84%EB%A6%AC%EC%97%90%ED%8B%B06.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAyMDAzMzFfMTgy/MDAxNTg1NjQ1NjIwMDk3.NPlasOjhX4uB-lHqbOGPuojMmeGFW2DS6r1CZnSLIhgg.bPEVhlFKauZXzByLXLIyB_wh-1fY6ala05QGTP53htAg.JPEG.mspot0223/4.jpg?type=w800", "https://blog.kakaocdn.net/dn/D3kf4/btq2MOYRJ58/w6cE51625I1dhMzXaomBL0/img.jpg", "https://blog.kakaocdn.net/dn/bD87bf/btrvWHixZRP/kc2HuB51AoJQeelpWhHO7k/img.gif", "https://mblogthumb-phinf.pstatic.net/20150826_106/snrnsms1104_1440599019899rTGfT_GIF/%25EC%258B%25A0%25ED%2598%2595%25EB%25A7%258C%25EB%25B0%259C%25EB%2583%2584%25EC%2583%2588%25ED%2582%25A5.gif?type=w800", "http://file3.instiz.net/data/file3/2018/01/29/f/f/2/ff2c2e0f117fe30466acf9a4d96f2396.gif", "https://gif.fmkorea.com/files/attach/new/20170221/486616/82743308/588729634/5b079caab5f32d13cf6c060dddade3b3.gif", "https://blog.kakaocdn.net/dn/tRyZ4/btrK2mxuw2q/rI1o6QkkAPx3RlN6rz1ts1/img.gif", "https://mblogthumb-phinf.pstatic.net/MjAxODA5MTVfODcg/MDAxNTM3MDE0OTk2MzY5.sx8qvvmnbAcNz3lA2i92L04Er7nGZ_xQW_gl_vmU3nkg.ln-in8wL2dmEJPW4gUghkFA_ttaFZTuKegmELWnuAG8g.GIF.fkal3551/짱구움짤1철수.gif?type=w800", "https://blog.kakaocdn.net/dn/br6Tvj/btrvS796Iox/k3Lm2SbsjElbwi2ToaEy5k/img.gif", "https://mblogthumb-phinf.pstatic.net/MjAxODA5MTVfNTMg/MDAxNTM3MDE0OTk4NjEx.OhaCFTl2tHUgfauqn0C72RGoZFX7O2_fEkNBvb1G83Ig.3_1jakK2t1g_0gJj8buhUZ0SjIJmv1QQDkaa8Tpgux4g.GIF.fkal3551/짱구움짤14훈이.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxODA5MTVfMTY3/MDAxNTM3MDE0OTk5NjUy.iqBekYYrDUH8-jz3KzcV5F3Vf2YFk8achjCSG10moTog.B24IjRojDUrqjqlISlBabdmKZEUW7Iu3bHIJR8ySRKIg.GIF.fkal3551/짱구움짤17맹구.gif?type=w800", "https://i.namu.wiki/i/xGbcB5VRGopQwPNk9Z_5Kj_BZdG2rrdpuyiwQEXeuZIlFQphWt7mfps0lLYguhL5WTpfd7a8GXeX5fL4KvyulA.gif", "https://mblogthumb-phinf.pstatic.net/MjAxOTAyMjBfMjM3/MDAxNTUwNjM4MTA2MTY1.9YmynmTsQr8JFB3nCZPOIYyl60LwtA0TJdlnEM1vRXIg.jUu6JLmCC1ICFeWy3R4Oy6HcJIWjQsTfFJtLpj40ZBEg.JPEG.sinnoske1992/downloadfile-35.jpeg?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxOTA2MDRfMjM3/MDAxNTU5NjAyNjk0Mzkw.fGayssFM9xtEdfq0IK-CMKe4bVAk-fZsH50DodUdvXMg.tqDn8azkKKcQDc5P0WsA5GTTuHM3vOKtukI4MoiOSpUg.GIF.qkrtpal789/2794b0bb28ed853a621bc9987a1a15455473018421245144610.gif?type=w800", "https://img.jbox.co.kr/UpFiles/Content/Image/1409/shot_l/1409_8.jpg", "https://dispatch.cdnser.be/wp-content/uploads/2017/12/20171228172011_1-176.jpg", "https://mblogthumb-phinf.pstatic.net/MjAxODA5MTVfMjMy/MDAxNTM3MDE0OTk5NDM3.7qQcd8wT7g6Mq0Pf4GNxcWR9rQ6ZApx7B7hxp_yBpZEg.5nQ0-qGp34KqkTd-lWkalsUANSE9LBDw5EC1-RjzyWog.GIF.fkal3551/짱구움짤10선생님.gif?type=w800", "https://img.extmovie.com/files/attach/images/135/622/901/048/e69ba17f46cdad1a935d7ceb1a3cf808.jpg", "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/47191429_488143728428907_3031250968189599744_n.png?stp=dst-png_s180x540&_nc_cat=108&ccb=1-7&_nc_sid=1480c5&_nc_ohc=FftQunhDpzAAX9fKFas&_nc_ht=scontent-ssn1-1.xx&oh=00_AfDKMVp4pMJy4WkUCE71xTblJcEbkIuf98bSd5EZrgTN4g&oe=64530E63", "https://static.wikia.nocookie.net/shinchan/images/e/ee/%ED%9B%88%EC%9D%B4_%EC%97%84%EB%A7%88.png/revision/latest?cb=20140112124434&path-prefix=ko", "https://pbs.twimg.com/media/FlLfhPUakAEzSCB?format=jpg&name=large", "https://1.gall-img.com/tdgall/files/attach/images/82/574/921/171/e7d5798d3ad63606ea231307ee8625a8.jpg", "https://pbs.twimg.com/media/Db3yTZ_VQAI6b4H.jpg", "https://mblogthumb-phinf.pstatic.net/20150505_41/kimjieun2001_1430753013150lfwHi_GIF/%BF%C0%B4%CF%C2%BB.gif?type=w2", "https://post-phinf.pstatic.net/MjAyMDA4MjVfMjAy/MDAxNTk4MzMzOTE2NDkx.Mgf8uOZqxsddHR5qdFD6_1muIxCtgbuN4eLPVd4wk0Yg.SoKgT1ON63_JIC8RZG4ajgzJXvYi0AIM3W6Q6d28JaYg.PNG/20200825_141116.png?type=w1200", "https://blog.kakaocdn.net/dn/bONOFP/btqBXFNYHxd/ofiSO2xY6cPsNp3xZ44sY1/img.jpg", "https://lh3.googleusercontent.com/-ofFHiLRAVoM/Wu3e8IXmDsI/AAAAAAACNYY/jg73VMJlZW0EZuGcWl0sJ-MBYMMEA1XkQCHMYCw/s0/a52a2c328fdb3dc8e7e42922dfdb072f74cea725.jpg", "https://scontent-ssn1-1.xx.fbcdn.net/v/t1.6435-9/103632582_1947085235592958_1801137134727595004_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=100&ccb=1-7&_nc_sid=110474&_nc_ohc=kN87FGr-oo8AX_jYk5c&_nc_ht=scontent-ssn1-1.xx&oh=00_AfCPQjwpFe8ym_to7TaN_C6AghaUCW60ua61jnx7Fb1bfQ&oe=64559E0F", "https://mblogthumb-phinf.pstatic.net/20160920_273/xoghks1303_1474374989678itvww_JPEG/%BB%E7%BE%C7.JPG?type=w2", "https://obj.the1.wiki/thecloud/temp/ec9995ebb984ec8ba431393837eb85842036ec9b94203236ec9dbc2e6a7067.jpg", "https://kkukowiki.kr/images/e/e9/%EB%A7%8C%ED%89%81%ED%89%81.png", "https://1.bp.blogspot.com/-nv4JQIjNszs/V1v4ZaNktZI/AAAAAAAADa8/ZLxcVgvAWMQIhfmTanN2yOM7rYFF2OcJACLcB/s1600/1%2B%25281%2529.jpg", "https://mblogthumb-phinf.pstatic.net/20150428_8/ojsdream_1430221391937l2EUC_PNG/%BF%C0%C1%F8%BC%F7150410.png?type=w2", "https://media.tenor.com/cJ3q4osVwEgAAAAC/detective-detective-conan.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTVfMTE2/MDAxNDg3MTUwOTY3MjY2.pkpp8vKFCwmSSND0ND7DgPpIX4gm4YOocST3cr2G2S8g.KArDJRWw23r5aekY09RFZUGvEH0DjhpglDwut_OXibMg.GIF.unesco1128/tumblr_njtauzFaDb1rwf16ho1_400.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxNzA2MDFfMzMg/MDAxNDk2MjkxMTg5NzY5.DmMlmPrgq3SAfivCJ5BWAMDNLMRC25iawGm_8VNMpCsg.a_McnNvDp7_HbuLl7_L7srBmFWnzoTBrz4gyJGxLHMwg.GIF.unesco1128/tumblr_o9u7p12Q4K1tmvxxdo1_500.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDFfMjA1/MDAxNTE5ODg5OTM3NjAx.KYM2knG2sfLy5Tqd3ZTBMz_gPbYYyN-GlRGQuhARKxAg.RLyr0EG7RCAx9rIg2sEhPaaWM-7MlztKBLrzI7q2sKsg.PNG.cup0527/5f3b14123cc17a7fc9a51f1a9fb1c4a6c783be2da7e39ba9d0dc73ae00af3e0214e515bbabf2.png?type=w2", "http://img.dmitory.com/img/201808/4vW/RLJ/4vWRLJb5GE4UgCI0C6AEgk.gif", "https://mblogthumb-phinf.pstatic.net/20160909_149/smiles115_1473400852114WNAuK_PNG/Conan_287.PNG?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAyMDA5MjBfMjkx/MDAxNjAwNTMxMDg1MTg0.pLXv5LtfcuTWj5Jmmar-5TWr6jA_hRn7pwCQlYZw-lMg.JzTdnNszLdKMMp2xH5OeEnzYKoYERuMtFSq6BAyH0wsg.JPEG.lara46/Genta_Kojima_Profile.jpg?type=w800", "http://file.instiz.net/data/file/20130831/2/b/a/2bacbc690eae5990d2d30c84f68ceec4", "https://mblogthumb-phinf.pstatic.net/MjAyMTA5MDJfMjkw/MDAxNjMwNTk0MTAwODgx.lSIQvDyALDDz4KKV07P-_Uz-_iAtgIdh0cCJlxvd2Lkg.BlepgIRTonDU1c8JCqFE6D4QIBYv2XKvTh0VS6xHx5Eg.GIF.cheun0423/IMG_2977.GIF?type=w800", "https://s.gae9.com/trend/931c67d32d3ae492.orig", "https://mblogthumb-phinf.pstatic.net/MjAxODA4MTRfNDYg/MDAxNTM0MjU4NzcyMzY5.-e9qmUlbbYmN91Hxu_Klz23XQGcp-tZpJ6RveJZqCp0g.CkxErmzp0lTFQjUtdCYr-2H6wrn33Q2M1POx3_QTqY8g.GIF.cheun0423/%EC%84%B8%EB%9D%BC.gif?type=w800", "http://file3.instiz.net/data/cached_img/upload/2020/06/09/23/670cf2d6511ab11e7c758a92d0f45189.gif", "https://mblogthumb-phinf.pstatic.net/20160922_101/smiles115_1474529534961r9Vuc_GIF/Conan_647.gif?type=w2", "https://t1.daumcdn.net/cfile/tistory/99CD543C5B8968FC1C", "https://coresos-phinf.pstatic.net/a/318e23/c_64fUd018svc5smjdh8bbpgp_d68sbu.jpg?type=e1280_std", "https://thumbs.gfycat.com/CheapSourAyeaye-size_restricted.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMTA0MjdfMjc1/MDAxNjE5NTMyNTg4MDA1.JwV8gzhrQ6Q3-H1eCKwKvJMT24VVVYbnDy5FzK-CMKMg.Cr0gmQ6G3xDhsxa2aC0XHemUBnGC5YWy3meNd5eL18Ag.JPEG.culturecre/IMG_20210416_162454_037.jpg?type=w800", "https://postfiles.pstatic.net/20121117_130/ddydrl7120_1353079744614Ec5Qp_PNG/%BD%C3%B6%F3%C5%E4%B8%AE.png?type=w2", "https://blog.kakaocdn.net/dn/te2Ti/btrfs6Loli0/ftu28HFlDRVLoPdqA2sX11/img.jpg", "https://file3.instiz.net/data/file3/2018/11/27/9/6/f/96fccb6ec466f57deff2182501413982.gif", "https://post-phinf.pstatic.net/MjAxODA4MDhfMTA5/MDAxNTMzNzA5OTExNzY2.Wt0GLqRIdb2BGk9Y2JiFxnAiY611klyt8thnTQBkq-Yg.6WFch0UuJRuGuBTXOmgWAxPFyxqy5RjHWALvhxUO9I4g.PNG/image_8044388881533709857413.png?type=w1200", "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDJfMTgg/MDAxNTE5OTc2OTA0NTIx.JfhntyuN4qyyyM2BgYTv0CSaDZHCix_6aOTGRvKg8-4g.2doD_FJh8EYIWxluTYKf1p2PZWXCCBx5c-vEU6VXEsUg.GIF.ysca5837/4.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxNjExMDNfMjUg/MDAxNDc4MTU0MDk0NzA4.NwZBWmsJPgpINaCQNH_00rViycHvORirmo8i0Xmt10Ug.Uv1lgJg9ArbjkSTm7UNd92ohdFRAIiLdw2DfPd5w9NEg.PNG.smiles115/Conan_1088.png?type=w2", "https://i.namu.wiki/i/CPotyIEl0h8S9i_jiqeBmx8duDMqffiWrKu3n4PaLstfnxMfjLJOR5HnPLTrtmts4VrXZqgPTG4VDEU0TneQ1g.gif", "https://getfile.fmkorea.com/getfile.php?code=d72c333dc64968daad3426dc5fde6ec7&file=http%3A%2F%2Ft1.daumcdn.net%2Fthumb%2FR1024x0%2F%3Ffname%3Dhttp%3A%2F%2Fcfile252.uf.daum.net%2Fimage%2F257E884D5554270924A989&redir=Y", "https://mblogthumb-phinf.pstatic.net/20101206_136/1126arashi_1291570036840CC6yH_GIF/33.gif?type=w2", "https://file3.instiz.net/data/file3/2018/03/14/f/5/8/f585bd5db1fb942b1970217d3c1916c7.gif", "https://i.namu.wiki/i/tqcVqoRlw_9cNFqe5SZmkg3mIzgWE0E7ivm4AFaGu8kHtGxKK3yayWiZlt1FRAEakDYO0lBh9tCf79vEIxSwXw.gif", "https://file3.instiz.net/data/file3/2018/02/27/3/6/b/36b477a1ecd8a6854dc236b8b6db50d1.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzAxMjBfOTkg/MDAxNDg0ODU0MzE4Nzg1.TY6vDVU_i5qsyvBBYQtFEbkWoq0_1T1-xAJ0fzTT0fkg.0NxxJXpsLWImYTlp1VjUD4RoSHNh58t6jPGzYPRdBDMg.GIF.sek74231/%EC%B5%B8%ED%8C%8C1.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/20150606_120/30zzz58_1433567179508wkIL6_GIF/tumblr_n5a7e0zkF71s24w6uo3_500.gif?type=w2", "https://img.chuing.net/i/euJJuVJ/GIF%202020-11-10%20%EC%98%A4%ED%9B%84%204-23-12.gif", "https://mblogthumb-phinf.pstatic.net/MjAxOTA4MjRfMTg0/MDAxNTY2NjU1NTA3NjM3.wY4wHoat5zHgejKYLEW-p7VzNbtFH79m3_YrJV4WQqcg.DtohceNqLXnSAPiLdjp8MCsmC1vT0O2904xhj2raiQQg.GIF.piano08205/c0c0459cedca8d03424dc76d0eb269d8.gif?type=w800", "https://file3.instiz.net/data/file3/2018/03/24/c/8/a/c8a100330170b0833973b54ad56b8201.gif", "https://img.chuing.net/i/eJpGHGe/ed4c6f3fb06dd0b74dba4cc333baec04.gif", "https://t1.daumcdn.net/cfile/tistory/253A734555C0B9A32F", "https://img.chuing.net/i/JyuHQN/Preview.x.jpg", "https://mblogthumb-phinf.pstatic.net/20110920_18/requiem8511_1316515759102Wf7Ob_GIF/%BB%E7%B6%FB%C0%C7_%C1%D6%B8%D4.gif?type=w2", "https://mblogthumb-phinf.pstatic.net/MjAxOTAxMThfMjM0/MDAxNTQ3Nzk2NDc0ODI0.IqwVi9E3C_W7o7CIcyh1Thcf-A5FVrBalgIHJmiQvFEg.00bfkP9Wvt8fGXCxPWyv1okDKlaSoucgedpKjJGbPhUg.GIF.wogus2003/GIF_20180401_121314.gif?type=w800", "https://t1.daumcdn.net/cafeattach/mEr9/eba29bc1643bebcc3ff0af59bb595cb77e983f54", "https://mblogthumb-phinf.pstatic.net/MjAxOTA1MTdfMjg0/MDAxNTU4MDg0OTg4OTky.0ts_ZVUZQ9eK5cP1EmbnRVSTWFNF5ikLhQ28H92y09Qg.-N1nOjZXXy42ldFWPxNLWhLZdiGFGdR0p4AKJ1OeCfsg.GIF.shl918/f9054e4d5a0e348df14464ec3e8e9827469245c2_hq.gif?type=w800", "https://blogfiles.pstatic.net/MjAxODA4MDdfMTY0/MDAxNTMzNjIxOTgyOTI2.3okRvHoOOXanVzxDEI3kVBaOaL1NYhtGShH6xldF_eog.F0Xz2Hv00XgSjfxgeSgzd4nBWz2oFGA3eGD_KLiJmpYg.GIF.piano08205/KakaoTalk_20180807_150542770.gif?type=w1",  "https://blogfiles.pstatic.net/MjAxODA4MDZfMTU4/MDAxNTMzNTMzODI0MjM0.9jtCcWCWZ5l3Fyfapk3hNVpo8wi7s7ftZwyXmUaTkfMg.3oiJvWfhhDEoPZmizV8YIVs3b57cLcUNIjTVO5oHefAg.GIF.piano08205/KakaoTalk_20180806_142625689.gif?type=w1", "https://mblogthumb-phinf.pstatic.net/MjAxODAzMDlfNTAg/MDAxNTIwNTIyOTE4NjUy.2Y1UtX19i0CuIpo-KSXtdQBUQtCaQPHIcBqViAujojYg.vLBv5Yqq3JrQmE9XLB9a08eh4HEaGaP7OFoaUjjriiYg.GIF.jsjdb/source.gif?type=w2", "https://t1.daumcdn.net/cafeattach/1YmK3/dc9043503c4c21772595aaeaedf6ceddb92e6092", "https://file3.instiz.net/data/file3/2018/05/16/8/a/4/8a416b2d84df55e848f65233db38f661.gif", "https://mblogthumb-phinf.pstatic.net/MjAxODA3MTZfMjI1/MDAxNTMxNzQ0NDk2Njkz.d-zuIA4eshaUn3DG_Wnrto2h4hvwm1Dnt2I4JaqjDYAg.3Ge06wfEQHbwbxmir0_xRasZanRiuSq3GshEi72J4qQg.GIF.kmr120940/6893492977be9e7c8186906bf37813a6d356a77d22495f38f967338e9f49780a-1.gif?type=w800", "https://thumbs.gfycat.com/JampackedCelebratedClownanemonefish-size_restricted.gif", "https://i.pinimg.com/originals/7c/93/2f/7c932f6aa81adca88c9b834c5c60f52f.gif", "https://mblogthumb-phinf.pstatic.net/20160529_221/pu9373_1464504465231BjUjt_GIF/AC_20160529-143932.gif?type=w2", "https://file3.instiz.net/data/file3/2018/02/04/a/1/0/a10ec636e29cc7c58d1e9d9949dc223b.gif", "https://file3.instiz.net/data/file3/2018/02/03/4/2/3/423571b8c27236c7ba562c502e45df2e.gif", "https://file3.instiz.net/data/file3/2019/10/29/c/f/9/cf9e08aefef02ae8c35727dffae9c712.gif", "https://file3.instiz.net/data/file3/2018/03/01/f/6/9/f695cae36e3b4067128a030dca26fd83.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MDhfMTQz/MDAxNTg2MzQ0Nzc2MDU5.y44n6oew75iKIvAGAA-E052bVttgk8JbqQpTAgcFskgg.VqdX_tXJLQrgcv1Dc3SpN0SCugPlZYqEk58OCPsfHCwg.GIF.ten6765/1586344775215.gif?type=w800", "https://mblogthumb-phinf.pstatic.net/MjAxOTExMzBfMTY4/MDAxNTc1MDk2MzY0NzQw.hhZ2J5-sLIAxsHQLAmlb-ha_4gQN6zFQ5mbr9-f5H_sg.fO_74jrr0mI1JjdwaX8U8GedramHji8PjnfrE8CpRXQg.GIF.rmduwkdlek/%EC%BA%A1%ED%8B%B4%ED%82%A4%EB%93%9C.gif?type=w800", "https://media.tenor.com/BWxjk8DrUYUAAAAM/hawkins.gif", "https://file3.instiz.net/data/file3/2018/03/12/8/9/e/89e2dfc92895ec0c1fb73a0a64130753.gif", "https://mblogthumb-phinf.pstatic.net/MjAyMDA0MTlfMTUz/MDAxNTg3MjkwMTUyMzA4.aEtpfMRfUAjgpe9gaXsel9IImNez5BICyJBbWcdgyaEg.QUejYAkg1pWW0QygIa5smtyQdWpsy0XhOUvbHc5uFZ4g.GIF.shark9678/1587290146048.gif?type=w800", "https://gif.fmkorea.com/files/attach/new/20150621/66955397/72051980/181208568/7760ea7560a5c8b44d61e2a7327f554d.gif", "https://i.namu.wiki/i/anO5elV4hYPRC0fchLDnGy3O1QAMj69JkB1ZaL6V_gnGaFJgySlNSYcHkT1_TLV89miJPCe-oIRsERvkBi0k9w.gif", "https://media.tenor.com/710y68QQHbMAAAAS/gold-roger-one-piece.gif", "https://media.tenor.com/DdM-vtNa-I0AAAAC/rayleigh-silvers-rayleigh.gif", "https://66.media.tumblr.com/2720febd248514977f811fecdf4712eb/tumblr_ogxpn30JTB1rgi39lo3_500.gifv", "https://postfiles.pstatic.net/MjAyMTA1MDlfNjQg/MDAxNjIwNTM1OTIwNjQx.xxtjJ6KNOvD-59TPoVKIpnJ7SiZAreSH-5XAYXIRkpkg.nbO4Gzf6lw76h0I4Ni_9XJY7gGwk_V2ie5nodzTpt1kg.GIF.kws3128pdm/19.gif?type=w966", "https://file3.instiz.net/data/file3/2018/02/05/6/b/f/6bf995e8f09e50bda6ad7e08150fbe4d.gif", "https://file3.instiz.net/data/file3/2018/02/07/7/0/2/702aed671afa9f398f2ab0156a6fde92.gif", "https://img.chuing.net/i/QHyeeHG/51.gif", "https://img.chuing.net/i/eJpVyuG/22f839bc86e106bab8a2120299f34a03.gif", "https://i.pinimg.com/originals/bb/3b/05/bb3b05aaa800810c5357edd567d33fe3.gif", "https://img.chuing.net/i/HGuQVu/Preview.x.jpg", "https://postfiles.pstatic.net/MjAxOTA3MjBfMTI4/MDAxNTYzNjMzNTk3NDI1.M22exKzBYQLc_OAAod1vOzUWA2-VjZHsIIrWRqRk-oog.HYOqesWMwtXUN0NGCwZSiOVCgfYhORFkrPODjEJhSqcg.GIF.boa791/videoplayback.2019-07-20_21_35_41.gif?type=w966", "https://thumbs.gfycat.com/HiddenWhimsicalHalibut-size_restricted.gif", "https://i.namu.wiki/i/Z_AQF8lKi4bd0AeIK8whVWfiQTCvcy4ChgyPwmBBMv5FqB3t2nK1rFZrbv26X9MScVgH3orPaO2sG2v-9KxnSw.webp", "https://file3.instiz.net/data/file3/2018/01/31/b/a/3/ba36b62791206d33f7b61de0a7a86636.gif", "https://file3.instiz.net/data/file3/2018/02/01/5/e/c/5ec9e13b9a2f21f422e83fd27054e90d.gif", "https://media.tenor.com/T_VvWE1pfJ4AAAAC/%EC%9B%90%ED%94%BC%EC%8A%A4-%EC%9B%90%ED%94%BC%EC%8A%A4%EC%BD%94%EC%95%8C%EB%9D%BC.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzA0MTZfMjY2/MDAxNDkyMzExNDIxODAw.UITj-HciK2yzgc80azxS-0BEYTp2dlhu5oCb-oc-MQsg.VaXfrUesOfhwNJoMmzIDJRfikLJGm1sacyShG_bLgeog.GIF.wogus2003/GIF_20170416_115125.gif?type=w2", "https://ordsearch.speedgabia.com/images/units/onepiece/104.jpg", "https://64.media.tumblr.com/7675d2364b1870c838ffdfd76cd20c58/tumblr_on1tmySyGH1qa8hrgo5_540.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzAyMTZfMTA4/MDAxNDg3MjI0NjUwMjc3.85qqYPO-651ikVwMyQpk1b6GAqPfTjFml1BpxqLacsQg.W72zspg3gfNBy87LSo7Ze_imkOoVWbJLFuN2IDJkAP8g.JPEG.skfnxh0827/%ED%9E%88%EB%A3%A8%EB%A3%A8%ED%81%AC.jpg?type=w2", "https://file3.instiz.net/data/file3/2018/03/12/e/c/1/ec1836c728ab89a6c241f42dde1b2bd0.gif", "https://mblogthumb-phinf.pstatic.net/MjAxNzExMDZfMjEg/MDAxNTA5OTM2ODc3ODE0.DXaRXjXP0Vr4qCbze58zccpJX9Be7F6qySo0mfkMrpgg.6SPACY673RDZtI6_pC_Q1L9uHU19ACA8v-gxnOQ8qlYg.GIF.baeeunhye13/9f6fd52e60dab4d6375eb40ba96b65cbe0c02b58_hq.gif?type=w800", "https://file3.instiz.net/data/file3/2018/02/26/9/8/5/9854ced20a2d6180ea79fd318ad0795b.gif", "https://t1.daumcdn.net/cfile/tistory/995501415AA2973F0A", "https://img.chuing.net/i/HNQGuVG/31.3.gif", "https://mblogthumb-phinf.pstatic.net/20160109_236/silver1ne_14523115576858f7Os_GIF/giphy.gif?type=w2", "https://file3.instiz.net/data/file3/2018/03/01/d/b/3/db308f925987d3ac713f66a4b8014f3d.gif", "https://mblogthumb-phinf.pstatic.net/MjAxODAxMzFfNTIg/MDAxNTE3MzU4MzI1MjQy.bxp4qlF1nJVGodenRJuerZebw9ociFUuG7P3167xZfYg.aYn_IR8SZgcLqQsvv3FozUmL8LecEdNouzFTbhuSWngg.PNG.hyoljun/c1693.png?type=w800"];

var quizList = [];
var testList = [];
var randomQuizList = Array.from({length: character.length}, (_, index) => index)
var quizCount = 0;
var answerNumber = 0;
var score = 0;

if(localStorage.getItem('mode') == 'easy') {
    document.getElementById('hardAnswerContainer').style.display = 'none';
} else {
    document.getElementById('easyAnswerContiner').style.display = 'none';
}

shuffle(randomQuizList)
while(quizList.length < 20) {
    quizList.push(Math.floor(Math.random() * (character.length - 3)) + 1);
    let setQuizList = new Set(quizList);
    quizList = [...setQuizList];
}

setQuiz()

function setQuiz() {
    answerNumber = quizList[quizCount];
    testList = [answerNumber - 1, answerNumber, answerNumber + 1, answerNumber + 2];
    shuffle(testList)
    document.getElementById("img").src = img[randomQuizList[answerNumber]];
    document.querySelectorAll(".easyAnswerBtn").forEach((btn, index) => {
        btn.innerText = character[randomQuizList[testList[index]]];
    })
}

function shuffle(array) {
    for (let index = array.length - 1; index > 0; index--) {
      const randomPosition = Math.floor(Math.random() * (index + 1));
      const temporary = array[index];
      array[index] = array[randomPosition];
      array[randomPosition] = temporary;
    }
}

function easyAnswer(index, button) {
    if(testList[index] == answerNumber) {
        score += 5;
    } else {
        button.style.backgroundColor = "#FF0000";
    }
    document.querySelectorAll(".easyAnswerBtn").forEach((btn, index) => {
        if(testList[index] == answerNumber) {
            btn.style.backgroundColor = "#27FA7B";
        }
        btn.disabled = true;
    })
    setTimeout(() => {
        if(quizCount >= 19) {
            localStorage.setItem("score", score);
            window.location.href = "../result/result.html";
        } else {
            quizCount++
            document.querySelectorAll(".easyAnswerBtn").forEach((btn, index) => {
                btn.style.backgroundColor = "white"
                btn.disabled = false;
            })
            setQuiz()
        }
    }, 1000);
}

function hardAnswer(answer) {
    let button = document.getElementById('hardAnswerBtn');
    if(answer.value == character[randomQuizList[answerNumber]]) {
        button.style.backgroundColor = "#27FA7B";
        score += 5;
    } else {
        button.style.backgroundColor = "#FF0000";
    }
    button.disabled = true;
    setTimeout(() => {
        if(quizCount >= 19) {
            localStorage.setItem("score", score);
            window.location.href = "../result/result.html";
        } else {
            answer.value = '';
            quizCount++;
            button.style.backgroundColor = "white";
            button.disabled = false;
            setQuiz();
        }
    }, 1000);
}