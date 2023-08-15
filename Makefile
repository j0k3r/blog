SHELL=bash

help: ## Display this help menu
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

build: ## Build jekyll site
	jekyll build

purge: ## Purge css
	npx purgecss --css _site/assets/css/main.css --content _site/*.html --output _site/assets/css -w highlight,pre

run: build ## build and run website using php server
	php -S localhost:3000 -t _site/

deploy: build purge ## Do everything

.PHONY: help build purge deploy

.DEFAULT_GOAL := deploy
