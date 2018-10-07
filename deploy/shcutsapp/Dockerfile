FROM shcuts-build-image AS binary
COPY shortcuts /home/opam/shcuts.app
RUN sudo chown opam:opam -R /home/opam/shcuts.app
WORKDIR /home/opam/shcuts.app/server
RUN eval `opam config env` && make -j4

FROM debian
RUN mkdir /tmp/libplist
WORKDIR /tmp/libplist
RUN apt-get update
RUN apt-get install -y git automake autoconf libtool python cython
RUN apt-get install -y build-essential
RUN git clone https://github.com/libimobiledevice/libplist.git .
RUN ./autogen.sh && make -j4
RUN make install
RUN apt-get install -y libpq-dev
WORKDIR /app
ENV PORT 8080
EXPOSE 8080
VOLUME /public
COPY --from=binary /home/opam/shcuts.app/server/_build/install/default/bin/shortcuts /app/shortcuts
CMD ["sh", "-c", "/app/shortcuts /public"]
