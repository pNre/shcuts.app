.PHONY: default all clean

default: json all

json:
	find . -iname '*.atd' -exec atdgen -t '{}' \; -exec atdgen -j '{}' \;

all:
	dune build @install
	@test -L bin || ln -s _build/install/default/bin .

clean:
	dune clean
	git clean -dfXq
