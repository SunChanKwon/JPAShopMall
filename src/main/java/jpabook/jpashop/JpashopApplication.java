package jpabook.jpashop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Scanner;


@SpringBootApplication
public class JpashopApplication {

	public static void main(String[] args) {

		Hello hello = new Hello();
		String data = hello.getData();
		System.out.println("data = "+ data); //lOMBOOKTest

		SpringApplication.run(JpashopApplication.class, args);
	}

}
