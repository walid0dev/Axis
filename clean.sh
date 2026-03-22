rm ./public/* ./src/App*
truncate -s 0 ./README.md
sed -i '/icon/d' ./index.html
rm -rf ./src/assets/
truncate -s 0 ./src/index.css
sed -E '/App|css/d' ./src/main.tsx
