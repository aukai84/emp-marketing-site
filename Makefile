# Project related variables
PROJECTNAME=$(shell basename "$(PWD)")
DONE="\n  $(M)  done ✨"

.SILENT: help
help: Makefile
	@echo "\n Choose a command to run in "$(PROJECTNAME)":\n"
	@sed -n 's/^##//p' $< | column -t -s ':' |  sed -e 's/^/ /'

## dev: Runs everything you need to develop
.SILENT: dev
dev:
	@echo "Starting development mode"
	$(MAKE) install
	npm run start 
	@echo $(DONE)

## install: Sets Volta engine and yarn installs
.PHONY: install
install:
	@echo "  $(M) Checking if there is any missing dependencies"
	volta install node@18.17.0
	volta setup
	npm install
	@echo $(DONE)