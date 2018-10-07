FROM ocaml/opam2:debian-stable AS shcuts-build-image
RUN sudo apt-get update
RUN opam depext dune async async_ssl core_extended cohttp cohttp-async yojson atdgen caqti caqti-async caqti-driver-postgresql stdint
RUN opam install -y dune
RUN opam install -y async
RUN opam install -y async_ssl
RUN opam install -y textutils re2
RUN opam update && opam upgrade
RUN opam install -y core_extended
RUN opam install -y cohttp cohttp-async 
RUN opam install -y yojson atdgen caqti caqti-async caqti-driver-postgresql stdint
RUN mkdir /home/opam/shcuts.app
RUN mkdir /home/opam/libplist
WORKDIR /home/opam/libplist
RUN sudo apt-get install -y apt-utils
RUN sudo apt-get install -y git automake autoconf libtool python cython
RUN git clone https://github.com/libimobiledevice/libplist.git .
RUN ./autogen.sh && make -j4
RUN sudo make install
