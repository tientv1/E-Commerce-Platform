FROM mcr.microsoft.com/mssql/server:2022-latest
ENV ACCEPT_EULA=Y
ENV SA_PASSWORD=${SA_PASSWORD}
COPY init-multiple-db.sql /tmp/
CMD /opt/mssql/bin/sqlservr & \
    sleep 20s && \
    /opt/mssql-tools/bin/sqlcmd -S localhost -U sa -P "$SA_PASSWORD" -i /tmp/init-multiple-db.sql && \
    wait
