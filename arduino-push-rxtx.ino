void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);

}

void loop() {
  Serial.write("Hello");
  delay(5000);
}
