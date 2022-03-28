# 2022-Competition

<br/>

> ## **지방대회 공부하기**
 
<br/>

+ Main Page 색상
  + white, black
  + 버튼 animation, a:hover - underline, 로딩시 이미지 블러처리
``` CSS
:root {
    --color-org: orange;
    --color-666: #666;
    --color-afb: #f9fafb;
    --color-f0f: #F0F0D0;
    --color-med: mediumaquamarine;
}

/* BTN Animation */
.ex {
    animation: btns 2s infinite ease-in-out;
}
@keyframes btns {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(3px);
    }
    100%{
        transform: translateY(0px);
    }
}

/* IMAGE Blur */
.ex {
    animation: image 2s ease-in-out;
}
@keyframes image {
    0%{
        filter: blur(10px);
    }
    100%{
        filter: blur(0px)
    }
}
```

<br/>

+ Event Page 색상
  + white, black
  + 버튼 animation, 로딩시 이미지 블러처리
``` CSS
:root {
    --color-org: orange;
    --color-666: #666;
    --color-afb: #f9fafb;
    --color-f9f: #f9ff9f;
}

/* BTN Animation */
.ex {
    animation: btns 2s infinite ease-in-out;
}
@keyframes btns {
    0%{
        transform: translateY(0px);
    }
    50%{
        transform: translateY(10px);
    }
    100%{
        transform: translateY(0px);
    }
}

/* IMAGE Blur */
.ex {
    animation: image 2s ease-in-out;
}
@keyframes image {
    0% {
        filter: blur(10px);
    }
    100% {
        filter: blur(0px);
    }
}
```

<br/>

+ Review Page 색상
  + white, black, mediumaquamarine, #999
  + 로딩시 이미지 블러처리
``` CSS
:root {
    --color-org: orange;
    --color-666: #666;
    --color-afb: #f9fafb;
    --color-f9f: #f9ff9f;
}

/* IMAGE Blur */
.ex {
    animation: image 2s ease-in-out;
}
@keyframes image {
    0% {
        filter: blur(5px);
    }
    100% {
        filter: blur(0px);
    }
}
```

<br/>
