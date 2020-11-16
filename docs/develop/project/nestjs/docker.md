---
id: docker
title: nestjs
---

## 操作命令
```docker
dcoker top xx                             查看容器内运行的进程
docker logs xx                            查看xx容器日志
docker logs --tail 10 xx                  获取xx容器最后10行内容
docker logs --tail 0 -f xx                跟踪容器的最新日志
docker logs -f xx                         实时监控容器日志
docker exec -d xx touch /home/etc_file    后台任务
docker exec -t -i xx /bin/bash            打开shell与xx容器交互
docker stop xx                            停止守护式容器
docker kill xx                            快速停止容器
docker ps -n x                            显示最后x个容器
docker inspect                            获取容器的详细信息
docker system df                          查看镜像、容器、数据卷所占用的空间
docker image ls --format "{{.ID}}: {{.Repository}}" 列出指定名称列
```


## 镜像安装
### portainer
```docker
docker run -d -p 9000:9000 --restart=always -v /var/run/docker.sock:/var/run/docker.sock --name="portainer" portainer/portainer-ce
```
### jenkins
```docker
docker run -d -u root -p 8888:8080 -p 50000:50000 --name="myjenkins" -e JENKINS_OPTS="--prefix=/jenkins" -v ~/docker:/var/jenkins_home -v ${which docker}:/usr/bin/docker -v /var/run/docker.sock:/var/run/docker.sock jenkins/jenkins:latest
```

