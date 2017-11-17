FROM alpine
MAINTAINER manuel.godinez22@gmail.com

# add docker-entrypoint.sh
ADD docker-entrypoint.sh /docker-entrypoint.sh

ADD dashboard /dashboard

RUN echo "updating container" \
 && apk -q update \
#
 && echo "installing and updating ca-certificates" \
 && apk -q add ca-certificates \
 && update-ca-certificates \
#
 && echo "installing wget" \
 && apk -q add wget \
#
 && echo "installing kubectl" \
 && mkdir /root/.kube \
 && wget -q -nv -O /stable.txt https://storage.googleapis.com/kubernetes-release/release/stable.txt \
 && latest=$(cat /stable.txt) \
 && wget -q -nv -O /usr/local/bin/kubectl https://storage.googleapis.com/kubernetes-release/release/$latest/bin/linux/amd64/kubectl \
 && rm -f /stable.txt \
 && chmod +x /usr/local/bin/kubectl \
#
 && echo "installing nodejs" \
 && apk -q add nodejs \
#
  && echo "initialising minerva_activity.log" \
  && echo "[$(date)] --- initialising Minerva ---" > /minerva_activity.log \
#
 && echo "creating cron job for log truncation" \
 && echo "5 1 * * 0 echo '' > /minerva_activity.log" > /etc/crontabs/root \
#
 && echo "making docker-entrypoint.sh executable" \
 && chmod +x /docker-entrypoint.sh \
#
 && echo "creating ENTRYPOINT as docker-entrypoint.sh"

ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["Minerva has initialised. Starting Minerva..."]
