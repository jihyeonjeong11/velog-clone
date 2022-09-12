import {css} from 'styled-components';


// white-space: nowrap	normal과 같이 공백을 채우지만 가로로 긴 줄에서도 줄 바꿈을 하지 않고 표시합니다.

// css trick 텍스트 ellipsis
//https://css-tricks.com/snippets/css/truncate-string-with-ellipsis/

export const ellipsis = css`
text-overflow: ellipsis;
white-space: nowrap;
overflow-x: hidden;
overflow-y: hidden;
`
