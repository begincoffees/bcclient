# NAMESPACE := company-name
# PROJECT := project
# PLATFORM := linux
# ARCH := amd64
# DOCKER_REPO := docker.company.com:5000
# DOCKER_IMAGE := $(DOCKER_REPO)/$(NAMESPACE)/$(PROJECT)

# VERSION := $(shell cat VERSION)
# GITSHA := $(shell git rev-parse --short HEAD)

all: help

help:
	@echo "---"
	@echo "IMAGE: $(DOCKER_IMAGE)"
	@echo "VERSION: $(VERSION)"
	@echo "---"
	@echo "make image - compile Docker image"
	@echo "make run - start Docker container"
	@echo "make run-test - run 'npm test' on container"
	@echo "make run-debug - keep container running with tail"
	@echo "make docker - push to Docker repository"
	@echo "make release - push to latest tag Docker repository"

image:
	docker build -t $(DOCKER_IMAGE):$(VERSION) \
		--build-arg GIT_TOKEN=${GIT_TOKEN} \
		--build-arg GIT_BRANCH=${GIT_BRANCH} \
		-f Dockerfile .

run:
	docker run -d \
		-p 8080:8080 \
		$(DOCKER_IMAGE):$(VERSION)

run-test:
	docker run -d \
		-p 8080:8080 \
		$(DOCKER_IMAGE):$(VERSION) npm test

run-debug:
	docker run -d \
		-p 8080:8080 \
		$(DOCKER_IMAGE):$(VERSION) tail -f /dev/null

docker:
	@echo "Pushing $(DOCKER_IMAGE):$(VERSION)"
	docker push $(DOCKER_IMAGE):$(VERSION)

release: docker
	@echo "Pushing $(DOCKER_IMAGE):latest"
	docker tag $(DOCKER_IMAGE):$(VERSION) $(DOCKER_IMAGE):latest
	docker push $(DOCKER_IMAGE):latest
	
release-branch:
	@echo "Pushing $(DOCKER_IMAGE):${GIT_BRANCH}"
	docker tag $(DOCKER_IMAGE):$(VERSION) $(DOCKER_IMAGE):${GIT_BRANCH}
	docker push $(DOCKER_IMAGE):${GIT_BRANCH}