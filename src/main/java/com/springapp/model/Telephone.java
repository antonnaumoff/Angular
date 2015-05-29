package com.springapp.model;

public class Telephone {

    private String age;
    private int id;
    private String imageUrl;
    private String name;
    private String snippet;

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSnippet() {
        return snippet;
    }

    public void setSnippet(String snippet) {
        this.snippet = snippet;
    }

    public String getAge() {

        return age;
    }

    public void setAge(String age) {
        this.age = age;
    }
}
