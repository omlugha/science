FROM quay.io/devibraah/SOPTY:latest
RUN git clone https://github.com/omlugha/science /root/science
WORKDIR /root/science/
RUN npm install
CMD ["npm", "start"]
