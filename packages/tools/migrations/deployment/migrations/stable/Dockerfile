FROM energyweb/origin-backend-app:latest

RUN apk --no-cache add curl

RUN mkdir /var/migration-config
COPY config/* /var/migration-config/

WORKDIR /usr/local/share/.config/yarn/global/node_modules/\@energyweb/

CMD ["/bin/bash","-c", "origin-backend-app/node_modules/.bin/typeorm migration:run --config exchange/dist/js/ormconfig.js && \
                        origin-backend-app/node_modules/.bin/typeorm migration:run --config origin-backend/dist/js/ormconfig.js && \
                        origin-backend-app/node_modules/.bin/typeorm migration:run --config origin-organization-irec-api/dist/js/ormconfig.js && \
                        origin-backend-app/node_modules/.bin/typeorm migration:run --config issuer-api/dist/js/ormconfig.js && \
                        origin-backend-app/node_modules/.bin/typeorm migration:run --config origin-device-registry-api/dist/js/ormconfig.js && \
                        tools/migrations/bin/migrations -c /var/migration-config/demo-config.json -s /var/migration-config/seed.sql && \
                        origin-backend-app"]
