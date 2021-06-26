package com.cybersoft.dto;

import java.sql.Timestamp;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotEmpty;

import com.fasterxml.jackson.annotation.JsonFormat;

public class CourseDto {

	private int id;
	
	@NotEmpty(message = "Please Enter Title !")
	private String title;
	
	@NotEmpty(message = "Please Enter Image !")
	private String image;
	
	@Min(1)
	private int leturesCount;
	
	@Min(1)
	private int hourCount;
	

	@JsonFormat(shape=JsonFormat.Shape.STRING, pattern="YYYY-MM-DD hh:mm:ss")
	private Timestamp lastUpdate;
	
	
	private int viewCount;
	
	@Min(1)
	private float price;
	

	private int discount;
	

	private float promotionPrice;
	
	@NotEmpty(message = "Please Enter Description !")
	private String description;
	
	private int categoryId;

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getLeturesCount() {
		return leturesCount;
	}

	public void setLeturesCount(int leturesCount) {
		this.leturesCount = leturesCount;
	}

	public int getHourCount() {
		return hourCount;
	}

	public void setHourCount(int hourCount) {
		this.hourCount = hourCount;
	}

	public Timestamp getLastUpdate() {
		return lastUpdate;
	}

	public void setLastUpdate(Timestamp lastUpdate) {
		this.lastUpdate = lastUpdate;
	}

	public int getViewCount() {
		return viewCount;
	}

	public void setViewCount(int viewCount) {
		this.viewCount = viewCount;
	}

	public float getPrice() {
		return price;
	}

	public void setPrice(float price) {
		this.price = price;
	}

	public int getDiscount() {
		return discount;
	}

	public void setDiscount(int discount) {
		this.discount = discount;
	}

	public float getPromotionPrice() {
		return promotionPrice;
	}

	public void setPromotionPrice(float promotionPrice) {
		this.promotionPrice = promotionPrice;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(int categoryId) {
		this.categoryId = categoryId;
	}

	public CourseDto() {
		
	}

	public CourseDto(int id, String title, String image, int leturesCount, int hourCount, Timestamp lastUpdate,
			int viewCount, float price, int discount, float promotionPrice, String description, int categoryId) {
		
		this.id = id;
		this.title = title;
		this.image = image;
		this.leturesCount = leturesCount;
		this.hourCount = hourCount;
		this.lastUpdate = lastUpdate;
		this.viewCount = viewCount;
		this.price = price;
		this.discount = discount;
		this.promotionPrice = promotionPrice;
		this.description = description;
		this.categoryId = categoryId;
	}
	
	
}
