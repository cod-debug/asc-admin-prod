docker stop asc_admin_fe
docker rm asc_admin_fe
docker rmi asc_admin_fe_v1

docker build -t asc_admin_fe_v1 .
docker run -d -p 2022:2022 --name asc_admin_fe asc_admin_fe_v1
docker image prune -f

