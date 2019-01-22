FROM python:alpine AS build

COPY . /opt/src/docs

WORKDIR /opt/src/docs
RUN pip install mkdocs mkdocs-material pygments pymdown-extensions
RUN mkdocs build
RUN mv site public

FROM nginx
COPY --from=build /opt/src/docs/public /usr/share/nginx/html
