r=$`pre`.innerText.trim().split`\n`.map(r=>[...r]);q=Math.max;M=z=>q(...z);c=r.map((r,i)=>r.map(r=>r[i]),z=0);r.map((r,y)=>r.map((C,x)=>(C>M(r.slice(0,x))||C>M(r.slice(x+1))||C>M(c[x].slice(0,y))||C>M(c[x].slice(y+1)))?z+=1:0));z
